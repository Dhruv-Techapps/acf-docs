# acf-docs

The user documentation for Auto Clicker AutoFill — how to install it, how to use it, and
what every feature does. Astro site published at **getautoclicker.com/docs/5.x**.

**Updating these docs is part of every release.** Any user-facing change ships with its
doc update, the same way it ships with a release-note post in `acf-blog`.

Only the current version (`5.x`) is maintained. Older versions are not updated — they
survive as `aliases` redirects on the pages that replaced them.

## Layout

```
config.yml                     — site-wide config (versions, social, Algolia app id, GTM)
site/astro.config.ts
site/content.config.ts         — the Zod front-matter schema (authoritative)
site/data/sidebar.yml          — navigation
site/src/content/docs/<section>/<page>.mdx
site/src/components/shortcodes/ — MDX components usable in pages
```

Sections: `getting-started`, `side-panel`, `automations`, `automation`, `step`,
`step-value`, `settings`, `extension`, `userscript`, `about`, `faq`.

Note `automations` (plural — managing the list: export, import, explore, reorder) and
`automation` (singular — configuring one: url, settings, schedule, loop, monitor) are
different sections. Easy to put a page in the wrong one.

## Front matter

`site/content.config.ts` is the schema and it is enforced at build time. Valid keys:

| Key | Notes |
| --- | --- |
| `title` | **required** |
| `description` | **required** |
| `subscription` | `PLUS` or `PRO` — renders the tier badge. Omit for free features. |
| `tags` | keyword array — emitted as `docsearch:tags` + `keywords` meta and indexed by Algolia. All 68 pages carry them; keep new pages consistent. |
| `added` | `{ version: '5.0.0', show_badge?: bool }` — "new in" badge |
| `aliases` | string or array — redirects from old URLs; carry these forward, they're how 3.x/4.x links keep working |
| `toc` | bool |
| `thumbnail`, `direction: 'rtl'`, `extra_js`, `sections` | occasional use |

Anything else is **silently dropped** — Zod strips unknown keys rather than erroring. See
"Known gaps" about `tags`.

## Adding a page

1. Create `site/src/content/docs/<section>/<page>.mdx` with valid front matter.
2. **Add it to `site/data/sidebar.yml`** under the right group, by `title`.

`DocsSidebar.astro` throws if `sidebar.yml` references a page that doesn't exist — a typo
in either place fails the build, so the two must agree.

## Writing pages

- `[[config:docs_version]]` interpolates from `config.yml` — use it in asset paths rather
  than hardcoding `5.x`:
  `<img src="/docs/[[config:docs_version]]/assets/img/loop.png" />`
- Shortcodes live in `site/src/components/shortcodes/`: `Callout`, `Code`, `Table`,
  `BsTable`, `Video`, `AddedIn`, `DeprecatedIn`, `SubscriptionBadge`, `Placeholder`,
  `IncludeMdx`, `Example`, `ExampleAutomation`.
- `<ExampleAutomation file="loop" plus>` offers a downloadable sample automation and
  points at **test.getautoclicker.com** (the `acf-test` page) as the place to try it. The
  `plus` prop labels it as needing the PLUS plan.

## Never link to PRs or branches

**Don't reference pull requests, branches, or commits in a doc page.** Some work happens in
private branches, so those links are dead or inaccessible for readers. Describe behaviour
in user-facing terms. The same rule applies in `acf-blog`.

## Local development

```bash
npm run docs-serve     # astro dev on port 9001
npm run docs           # build + lint (prettier check + HTML validation)
```

In dev the site origin is `http://localhost:9001`; in production it's `baseURL` from
`config.yml`.

## Deploy

Push a tag `v*` → `gh-pages.yml` builds, validates HTML (`vnu`, needs Java), runs
`linkinator`, and publishes to GitHub Pages. Nothing deploys on merge to main.

Broken links and invalid HTML fail the deploy, so they are worth checking locally first.

## Downstream: the Discord bot

`acf-bot` answers user questions from a **Pinecone index built by crawling
getautoclicker.com/docs/5.x**. Editing a page here does not change the bot's answers until
`npm run ingest` is re-run in `acf-bot`. A docs fix intended to correct bot behaviour is
only half done at merge.

## Search

Algolia **DocSearch** runs its own crawler on a schedule (Tuesdays), re-scanning the
deployed site and rebuilding the index. Nothing in this repo pushes an index and there is
no post-deploy step — a published change appears in search on the crawler's next pass.

**Only what appears in the rendered HTML is searchable.** Front matter that isn't rendered
contributes nothing, because the crawler sees HTML, not the content collection.

That's why `tags` and `aliases` are emitted as meta tags in `Head.astro`:

```html
<meta name="docsearch:tags" content="loop,batch,automation" />
<meta name="keywords" content="loop, batch, automation" />
<meta name="docsearch:aliases" content="/docs/4.x/automation/batch/,…" />
```

`aliases` go in for backward compatibility — searching an old URL still finds the page.

**`algolia/crawler.config.js` mirrors the crawler configuration** so it is reviewable and
recoverable, but the live config is in the Algolia dashboard — editing the file changes
nothing until it's pasted there. Its `recordExtractor` reads those meta tags and attaches
`tags` / `aliases` to every record, since `helpers.docsearch()` only extracts the DOM
selectors it's given. `tags` is a facet and ranks above body content; `aliases` ranks last.

The crawler API key is **not** in that file — it has write access to the index and this
repo is public. The key in `config.yml` (`algolia.api_key`) is the search-only key and is
safe to expose.

`algolia-plugin.js` substitutes app id / index name / search key into `search.js` at build
time. `Head.astro` also emits `docsearch:version` to scope the index to `5.x`.

## Known gaps

1. **`subscription` badges are maintained by hand** and nothing verifies them against what
   `acf-firebase` actually enforces. They can drift from real entitlement — treat a badge
   as a claim about intent, not proof of behaviour.
2. **`prettier-plugin-astro` is installed but not enabled** — `site/.prettierrc.json` has
   no `plugins` entry, so all 64 `.astro` files are skipped by `docs-prettier-check`
   (prettier can't infer a parser and silently ignores them). Upstream Bootstrap fixed this
   in commit `d70b829`. `docs-prettier-check` is also not in the PR gate.
3. **Undeclared dependencies**: `site/src/libs/utils.ts` imports `github-slugger`,
   `mdast-util-from-markdown` and `mdast-util-to-string`, none of which are in
   `package.json` — they resolve only as hoisted transitive deps.

## Relationship to upstream Bootstrap

This site is a fork of the Astro docs in `twbs/bootstrap` (`site/`), with ACF content.
**Don't blanket-sync from upstream — this fork is ahead**: Astro 7.x here vs 5.18.2 there,
Content Layer API (`loader: glob()`, `src/content.config.ts`) vs their legacy
`src/content/config.ts`, `getEntry` vs their deprecated `getEntryBySlug`. Cherry-pick only.

Upstream has had ~4 docs-infrastructure commits in 12 months, so there is little to track.
`tags` is an ACF addition — upstream has no such concept.

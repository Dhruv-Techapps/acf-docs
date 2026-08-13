// The return value is intentionally unused. The Algolia crawler dashboard expects the
// configuration as a bare `new Crawler({ ... })` expression, so it cannot be assigned or
// exported. This file is a mirror of that dashboard config, not application code.
new Crawler({ // NOSONAR
  appId: 'S4D9IW396R',
  // Crawler API key. The dashboard sandbox has no `process.env`, so it has to be a literal
  // here. Note this is a WRITE-capable key in a public repo — rotate it in the Algolia
  // dashboard if it is ever exposed, and re-paste the new value.
  apiKey: 'ad3b8c61cf737fc0c3593d254d9b2cd3',
  maxUrls: 5000,
  indexPrefix: '',
  rateLimit: 8,
  renderJavaScript: false,
  startUrls: ['https://getautoclicker.com'],
  discoveryPatterns: ['https://getautoclicker.com/**'],
  // Alias pages for retired doc versions are `noindex` meta-refresh stubs, so the crawler
  // fetches them and then discards them. They are ~69% of all built pages (156 of 226), so
  // skipping them outright is most of the crawl budget. Redirects still work for visitors —
  // this only stops the crawler walking them.
  exclusionPatterns: ['https://getautoclicker.com/docs/3.x/**', 'https://getautoclicker.com/docs/4.x/**'],
  schedule: 'at 12:19 on Tuesday',
  maxDepth: 10,
  actions: [
    {
      indexName: 'test-getautoclicker',
      pathsToMatch: ['https://getautoclicker.com/**'],
      recordExtractor: ({ $, helpers }) => {
        $('.skippy').remove()
        $('#bdNavbar').remove()
        $('#bdSidebar').remove()
        $('.bd-footer').remove()
        // The table of contents sits INSIDE <main>, so its list items match the `main li`
        // content selector below and every heading gets indexed twice — once as a heading,
        // once as body text. Present on all 68 docs pages.
        $('.bd-toc').remove()

        // Read the `docsearch:*` meta tags emitted by `site/src/components/head/Head.astro`.
        //
        // IMPORTANT: `helpers.docsearch()` does NOT pick these up automatically — it only
        // extracts the DOM selectors in `recordProps`. Verified against the live index:
        // every page emits `docsearch:version`, and `version` is configured as a facet, yet
        // every record has `version: null`. They have to be attached explicitly, below.
        //
        // Kept to plain ES5-ish syntax on purpose: the crawler's config sandbox rejects
        // optional chaining (`?.`), nullish coalescing (`??`) and object spread with a
        // "Parsing error: Unexpected token ." Do not "modernise" this block.
        var meta = function (name) {
          var value = $('meta[name="' + name + '"]').attr('content')
          return value ? value.trim() : ''
        }
        var metaList = function (name) {
          var value = meta(name)
          if (!value) {
            return []
          }
          return value
            .split(',')
            .map(function (item) {
              return item.trim()
            })
            .filter(function (item) {
              return item.length > 0
            })
        }

        var tags = metaList('docsearch:tags')
        var aliases = metaList('docsearch:aliases')
        var version = meta('docsearch:version')
        var lang = meta('docsearch:language')

        var records = helpers.docsearch({
          recordProps: {
            lvl0: {
              selectors: ['h1', 'head > title'],
              defaultValue: 'Documentation'
            },
            lvl1: ['article h1', 'main h1', 'h1'],
            lvl2: ['article h2', 'main h2', 'h2'],
            lvl3: ['article h3', 'main h3', 'h3'],
            lvl4: ['article h4', 'main h4', 'h4'],
            lvl5: ['article h5', 'main h5', 'h5'],
            lvl6: ['article h6', 'main h6', 'h6'],
            content: ['article p, article li', 'main p, main li', 'p, li', '.bd-content']
          },
          aggregateContent: true,
          recordVersion: 'v3'
        })

        // `helpers.docsearch()` only extracts the DOM selectors above, so meta-tag values
        // have to be attached to each record explicitly. `version` and `lang` are already
        // configured as facets on the index but carried no data before this.
        //
        // Assigned in place rather than with object spread or `Object.assign`: spread is
        // rejected by the config sandbox (see the syntax note above), and `Object.assign`
        // trips a lint rule that wants spread. The records are freshly built by
        // `helpers.docsearch()` above and not shared, so mutating them is safe.
        return records.map(function (record) {
          record.tags = tags
          record.aliases = aliases
          record.version = version
          record.lang = lang
          return record
        })
      }
    }
  ],
  // `/sitemap.xml` 404s — @astrojs/sitemap emits `sitemap-index.xml` + `sitemap-0.xml`.
  // The old value meant this directive fed the crawler nothing.
  sitemaps: ['https://getautoclicker.com/sitemap-index.xml'],
  initialIndexSettings: {
    'test-getautoclicker': {
      advancedSyntax: true,
      allowTyposOnNumericTokens: false,
      attributeCriteriaComputedByMinProximity: true,
      attributeForDistinct: 'url',
      // NOTE: `initialIndexSettings` is applied only when the index is FIRST created. The
      // live index has already drifted from it (it gained `version`), so editing this block
      // does not change a live index — apply settings with the Algolia CLI instead:
      //   algolia settings set test-getautoclicker --attributesForFaceting ...
      // This block is kept accurate so a rebuilt-from-scratch index matches production.
      attributesForFaceting: ['type', 'lang', 'version', 'tags'],
      attributesToHighlight: ['hierarchy', 'content'],
      attributesToRetrieve: ['hierarchy', 'content', 'anchor', 'url', 'url_without_anchor', 'type', 'tags', 'version'],
      attributesToSnippet: ['content:10'],
      camelCaseAttributes: ['hierarchy', 'content'],
      customRanking: ['desc(weight.pageRank)', 'desc(weight.level)', 'asc(weight.position)'],
      distinct: 1,
      highlightPostTag: '</span>',
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      ignorePlurals: true,
      minProximity: 1,
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      ranking: ['words', 'filters', 'typo', 'attribute', 'proximity', 'exact', 'custom'],
      removeWordsIfNoResults: 'allOptional',
      searchableAttributes: [
        'unordered(hierarchy.lvl0)',
        'unordered(hierarchy.lvl1)',
        'unordered(hierarchy.lvl2)',
        'unordered(hierarchy.lvl3)',
        'unordered(hierarchy.lvl4)',
        'unordered(hierarchy.lvl5)',
        'unordered(hierarchy.lvl6)',
        // Tags rank above body content so a keyword match beats an incidental prose match.
        'unordered(tags)',
        'content',
        'unordered(version)',
        // Old URLs, lowest priority: lets a search for a legacy path still find the page.
        'unordered(aliases)'
      ]
    }
  },
  ignoreCanonicalTo: false,
  safetyChecks: { beforeIndexPublishing: { maxLostRecordsPercentage: 10 } },
  extraUrls: [
    'https://getautoclicker.com/',
    'https://getautoclicker.com/sitemap-index.xml',
    'https://getautoclicker.com/sitemap-0.xml'
  ]
})

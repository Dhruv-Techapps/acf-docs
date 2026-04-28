# Auto Clicker AutoFill Documentation

This is an Astro-based documentation site for Auto Clicker AutoFill at `getautoclicker.com`. The documentation provides comprehensive guides, tutorials, and reference material for the extension.

## Working Effectively

- Bootstrap and build the documentation:
  - `npm install` -- installs Astro, Bootstrap, and development dependencies
  - `npm run docs-build` -- builds the site to `_site/` directory via Astro
  - `npm run docs-serve` -- starts Astro dev server on port 9001 with hot reload
  - `npm run docs` -- runs full build and lint sequence

- Development workflow:
  - Use `npm run docs-serve` for local development
  - Always run `npm run docs-lint` before committing
  - Astro builds from `site/` to `site/dist` then copies to `_site/`
  - Use `npm run docs-prettier-format` to auto-format files

## Project Structure

```
/site
├── src/                  # Astro source files
│   ├── content/         # Documentation content (Markdown/MDX)
│   ├── layouts/         # Astro layouts
│   ├── components/      # Astro/React components
│   └── pages/           # Route pages
├── public/              # Static assets (images, favicons)
├── static/              # Additional static files
├── data/                # YAML/JSON data files
└── astro.config.ts      # Astro configuration
```

## Tech Stack & Key Libraries

- **Static Site Generator**: Astro (v6.1.8)
- **Markdown**: MDX with Prism for syntax highlighting
- **CSS Framework**: Bootstrap 5.3.8 with Sass customization
- **JavaScript**: Vanilla JS with clipboard.js for code copying
- **Search**: Algolia DocSearch integration
- **Build Tooling**:
  - Astro for site generation
  - Autoprefixer for CSS processing
  - Prettier for code formatting (120 line width, single quotes, no semicolons)
  - VNU for HTML validation
  - TypeScript for type checking

## Astro Configuration

- **Root Directory**: `site/`
- **Output Directory**: `site/dist` (copied to `_site/`)
- **Port**: 9001
- **Base URL**: `https://getautoclicker.com`
- **Integrations**: MDX, Sitemap, Prism
- **Features**: Auto-import, Algolia search, StackBlitz integration

## Content Guidelines

- Write documentation in Markdown or MDX (for interactive components)
- Use semantic headings: H1 for page title, H2-H6 for sections
- Include code examples with proper syntax highlighting
- Use frontmatter for page metadata (title, description, version)
- Cross-reference related pages with proper links
- Keep content organized by version (`docs/5.x/`, etc.)
- Include screenshots/images in `site/public/` with descriptive alt text

## Common Development Tasks

### Creating New Documentation Pages
1. Create MDX file in `site/src/content/` under appropriate category
2. Add frontmatter with title, description, and version
3. Write content using Markdown/MDX syntax
4. Preview with `npm run docs-serve`
5. Format with `npm run docs-prettier-format`
6. Validate with `npm run docs-lint`

### Working with Components
1. Create Astro components in `site/src/components/`
2. Use TypeScript for props and type safety
3. Import in MDX files for interactive examples
4. Follow existing component patterns for consistency

### Search Integration
- Algolia DocSearch is configured
- App ID: `S4D9IW396R`
- Index: `test-getautoclicker`
- Search updates automatically on build

## Build & Deployment

- Production build: `npm run docs-build`
- Preview build: `npm run astro-preview` (port 9001)
- Output: `_site/` directory
- Site is deployed to `getautoclicker.com`
- Includes sitemap, robots.txt, and analytics (GTM)

## Quality Checks

Before committing, ensure:
1. **Prettier**: `npm run docs-prettier-check` -- code formatting
2. **VNU**: `npm run docs-vnu` -- HTML5 validation
3. **Build**: `npm run docs-build` -- successful Astro build

## Code Style

- **Line Width**: 120 characters
- **Quotes**: Single quotes
- **Semicolons**: No semicolons (Prettier enforced)
- **Arrow Functions**: Always use parentheses
- **Trailing Commas**: None
- **TypeScript**: Use for all configuration and component props

## Rules for Copilot

- Use ES modules (`import`/`export`), never `require()`
- Follow Astro component syntax for layouts and pages
- Use MDX for documentation with interactive components
- Maintain Bootstrap 5.3 compatibility
- Use semantic HTML5 elements
- Follow Prettier formatting rules (run auto-format before committing)
- Ensure all internal links are valid
- Include proper TypeScript types

## Relationship to Other Projects

This documentation site is part of the Auto Clicker AutoFill ecosystem:
- Main extension: `auto-clicker-auto-fill` workspace (monorepo)
- Blog: `acf-blog` project at `blog.getautoclicker.com`
- Backend: `acf-firebase` project (Firebase Functions)
- Translations: `acf-i18n` project
- Options page: Hosted at `stable.getautoclicker.com`

When referencing other projects or creating cross-links, use:
- Blog: `https://blog.getautoclicker.com`
- Stable app: `https://stable.getautoclicker.com`
- Configs: `https://configs.getautoclicker.com`
- Beta: `https://beta.getautoclicker.com`
- Dev: `https://dev.getautoclicker.com`

## Version Management

Documentation is versioned:
- Current version: `5.0.0` (`docs_version: 5.x`)
- Keep version-specific docs in separate folders
- Update `current_version` in `config.yml` for new releases
- Maintain backwards compatibility for older versions

---
layout: docs
title: Addon · Value
description: Provide the expected value to compare against (for text fields, attributes, or extracted content).
group: addon
toc: true
---

## Value
The value that the Addon compares with the page value.

Examples:
- Text to match exactly or partially (based on the chosen condition)
- Numbers for numeric comparisons (>, ≥, …)
- Booleans for checked/unchecked

This field is required when the selected condition needs a reference value.

## Value Extractor
Use a regular expression to extract part of the element’s text before comparison. Helpful when the text includes currency symbols or extra labels.

Examples:
- Prices and numeric values
    - Decimal number: `\d+\.\d*` — `$123.00` → `123.00`
    - Integer: `\d+` — `$123.00` → `123`
    - Currency after $: `(?<=\$)[\d,]+(?:\.\d+)?` — `$1,234.56` → `1,234.56`
    - Signed number: `-?\d+(?:\.\d+)?` — `Balance: -45.6 USD` → `-45.6`
    - Percentage (no % sign): `\d+(?=%)` — `12%` → `12`
    - Number before “kg”: `\d+(?:\.\d+)?(?=\s*kg)` — `2.5 kg` → `2.5`

- Labels and inline text
    - After “Total: ”: `(?<=Total:\s)\d+` — `Total: 42 items` → `42`
    - After “Qty: ”: `(?<=Qty:\s)\d+` — `Item A — Qty: 7` → `7`
    - Inside parentheses: `(?<=\()[^)]+(?=\))` — `Status (out of stock)` → `out of stock`

- Dates and IDs
    - ISO date (YYYY-MM-DD): `\d{4}-\d{2}-\d{2}` — `Updated: 2024-07-01 10:00` → `2024-07-01`
    - Code like INV-12345: `[A-Z]{3}-\d{5}` — `Order INV-12345 paid` → `INV-12345`

- Web and color
    - Hostname from URL: `(?<=https?://)[^/]+` — `https://example.com/path` → `example.com`
    - Hex color (6 chars): `(?<=#)[0-9A-Fa-f]{6}` — `Color: #FF8800` → `FF8800`
    - Username after @: `(?<=@)[\w.-]+` — `@user.name mentioned` → `user.name`

Try your pattern at [regex101.com](https://regex101.com/).

{{<callout info>}}
Attribute tips:
- `@aria-checked` extracts the `aria-checked` attribute value (e.g., `true`/`false`).
- `@class` extracts the class string (e.g., `custom-checkbox`). Consider a regex like `(^|\s)token(\s|$)` (using single backslashes for literal regex) to test a single class.
- `@type` extracts the `type` attribute (e.g., `checkbox`).
- `@attribute` stands for any attribute – replace with the actual name (e.g., `@data-status`).
{{</callout>}}
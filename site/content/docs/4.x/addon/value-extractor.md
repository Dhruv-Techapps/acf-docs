---
layout: docs
title: Addon · Value Extractor
description: It is used to extract particular value from text.
group: addon
toc: true
---

Its regular expression field where you need to pass regex which will extract value

{{<callout info>}}
- `\d+.\d*` it extracts `123.00` from `$123.00`
- `\d+` it extract `123` from `$123.00`

try [regex](https://regex101.com/)
{{</callout>}}

<hr/>

{{<callout info>}}
- `@aria-checked` it extracts value (`string`) from attribute `aria-checked="string"`
- `@class` it extracts value (`custom-checkbox`) from class attribute `class="custom-checkbox"`
- `@type` it extracts value (`checkbox`) from type attribute `type="checkbox"`
- `@attribute` it cam extract `value` from attribute.
{{</callout>}}
```html
<input type="checkbox" aria-checked="true" class="custom-checkbox" attribute="value">
```
---
layout: docs
title: Addon · Value
description: Suppose you are performing action on input, textarea, dropdown you should provide one extra field that is value for xpath you have added.
group: addon
toc: true
---

## Value
**Examples**
This is mandatory field for addon

## Value Extractor

Its regular expression field where you need to pass regex which will extract value

**Examples**
- `\d+.\d*` it extracts `123.00` from `$123.00`
- `\d+` it extract `123` from `$123.00`

try [regex](https://regex101.com/)

{{<callout info>}}
- `@aria-checked` it extracts value (`string`) from attribute `aria-checked="string"`
- `@class` it extracts value (`custom-checkbox`) from class attribute `class="custom-checkbox"`
- `@type` it extracts value (`checkbox`) from type attribute `type="checkbox"`
- `@attribute` it cam extract `value` from attribute.
{{</callout>}}
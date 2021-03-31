---
layout: docs
title: Value Extractor
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
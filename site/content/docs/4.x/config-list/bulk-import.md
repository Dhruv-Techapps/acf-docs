---
layout: docs
title: Bulk Import Configuration
description: Restore configurations from a Bulk Export JSON file; merges into your existing list.
group: config-list
toc: true
---
{{<img configuration-list-bulk-import.png>}}

Supported files:
- JSON files created by the [Bulk Export]({{<docsref "/config-list/bulk-export">}}) feature.

What happens during import:
- Configurations from the file are added to your list. Duplicates may be merged or overwritten based on internal identifiers.

Notes:
- Single exported configurations cannot be imported with Bulk Import.
- Keep a backup of your current list before large imports.
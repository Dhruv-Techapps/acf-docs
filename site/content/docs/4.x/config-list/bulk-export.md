---
layout: docs
title: Bulk Export Configuration
description: Export all configurations to a single JSON file for backup or transfer.
group: config-list
toc: true
---
{{<img configuration-list-bulk-export.png>}}

{{<callout info>}}
Bulk Export vs Export Configuration:
- Bulk Export creates one JSON file containing all configurations (array format).
- Export Configuration saves only the currently selected configuration (single-object JSON).
- Imports auto-detect the file type: arrays trigger bulk import; objects trigger single import.
- Imports merge into existing configurations; nothing is fully replaced, and duplicates may occur.
{{</callout>}}

Use Bulk Export when you want a full backup or to move all configurations to another browser/profile.

Compatibility:
- Bulk Export files (array JSON) can be restored with [Bulk Import]({{<docsref "/config-list/bulk-import">}}); the importer detects arrays automatically.
- If a single-object JSON is provided to Bulk Import, it is handled as a single import (not rejected).
- Imports merge on top of existing data; identical or overlapping entries can result in duplicates.
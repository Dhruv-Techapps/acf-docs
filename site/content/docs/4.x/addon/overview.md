---
layout: docs
title: Addon
description: Add an Addon to an Action to validate page state (text, attributes, functions) before the Action runs.
group: addon
toc: true
---
{{<img addon.png>}}

Addons let you check the page before an Action executes. You can read text or attributes, evaluate simple browser values (like current time or URL), compare them against your criteria, and then decide whether to proceed.

Tip: Click the three-dot (ellipsis) menu at the end of the row, then select `Addon`.

Core parts of an Addon:
- [Element Finder]({{<docsref "/addon/element-finder">}})
- [Condition]({{<docsref "/addon/condition">}})
- [Value]({{<docsref "/addon/value">}})
- [Recheck]({{<docsref "/addon/recheck">}})

What you can validate:
- Text content of an element (e.g., a label, badge, or message)
- Attribute values (e.g., `@aria-checked`, `@class`, `@type`, or any custom attribute)
- Simple browser values via functions (e.g., `new Date().getHours()`, `location.href`)

Based on the result, you can let the Action run as-is, or configure the Addon to retry or fall back to Stop/Skip/Refresh/Goto as needed.

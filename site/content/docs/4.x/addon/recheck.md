---
layout: docs
title: Addon · Recheck
description: Recheck is used to check condition for more than once
group: addon
toc: true
---
## Recheck
**Examples**
- positive numeric value `1` to `999`

## Recheck Interval
Recheck interval is used to delay recheck with specified time.
{{<markdown>}}
{{<partial example-float.md>}}
{{</markdown >}}

## Recheck Options
{{<table>}}
| `Name`        | Default     | Description                                      |
|----------------|-------------|--------------------------------------------------|
| `Stop`       | selected    | Do nothing. Stop extension without proceeding further. |
| `Skip`       | not selected| Skip current action and continue next action.    |
| `Refresh Page` | not selected| Refresh whole page.                              |
{{</table>}}

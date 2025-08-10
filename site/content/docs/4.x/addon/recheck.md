---
layout: docs
title: Addon · Recheck
description: Try the Addon condition multiple times with a delay between attempts; choose what to do if it never matches.
group: addon
toc: true
---
## Recheck
Number of times to retry the Addon condition when it doesn’t match initially.

Examples:
- Positive integer `1` to `999`.

## Recheck Interval
Delay between retries (in seconds). Supports decimals and the `aeb` range syntax for random delays.
{{<markdown>}}
{{<partial example-float.md>}}
{{</markdown >}}

## Recheck Options
{{<table>}}
| `Name`         | Default       | Description                                         |
|----------------|---------------|-----------------------------------------------------|
| `Stop`         | selected      | Stop the workflow; no further actions run.          |
| `Skip Action`  | not selected  | Skip this action and continue with the next one.    |
| `Refresh`      | not selected  | Reload the current page before continuing.          |
| `Goto Action`  | not selected  | Jump to a specific action in the list.              |
{{</table>}}

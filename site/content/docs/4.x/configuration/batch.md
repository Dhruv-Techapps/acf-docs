---
layout: docs
title: Batch
description: Configure how many times a batch runs, the delay between runs, and whether to refresh the page after completion.
group: configuration
toc: true
---
{{<img batch.png>}}

## Repeat
Set how many times this batch should execute.

- Provide a positive integer. The batch runs that many times.
- Valid range: `1` to `999`.

You can also use the repeat index inside Element Finder XPath or Value using the `<batchRepeat>` placeholder. The placeholder is replaced with the current 1‑based repeat index during execution.

Example:
- Without repeat index: `//table/tr[1]/td[1]/button` selects only the first row button.
- With repeat index: `//table/tr[<batchRepeat>]/td[1]/button` and Repeat = `3` will iterate rows 1, 2, and 3.

## Repeat Interval
Control the delay between repeats.

- Unit: seconds (supports decimals). Examples: `0.5`, `1`, `2.5`.
- Requires Repeat to be set (>= 1).

{{<markdown>}}
{{<partial example-float.md>}}
{{</markdown >}}

{{<callout info>}}
Repeat Interval is optional. If left blank, each repeat starts immediately.
{{</callout>}}

{{<callout warning>}}
Repeat is required when using Repeat Interval.
{{</callout>}}

## Refresh
Refresh the page after all actions in the batch complete successfully.

{{<callout info>}}
The page refresh triggers only after all actions finish successfully.
{{</callout>}}

{{<callout danger>}}
#### Refresh and Repeat cannot be used together
Refresh overrides Batch Repeat. Use either Batch Repeat or Refresh, not both.
{{</callout>}}
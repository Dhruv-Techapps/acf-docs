---
layout: docs
title: Settings · Retry
description: Retry settings control how the extension handles cases where an element is not found on the page.
group: settings
toc: true
---
{{<img settings-retry.png>}}
## Retry
Retry finding an element on a webpage for a specified number of times. The default is 5.
{{<callout info>}}
Specify a positive numeric value between `1` and `999`.
{{</callout>}}

## Retry Interval
The time interval between retries. The default is 1 second.
{{<markdown>}}
{{<partial example-float.md>}}
{{</markdown>}}

{{<callout info>}}
This field is optional. If left blank, retries occur without additional delay.
{{</callout>}}

{{<callout warning>}}
Set Retry (> 1) if you want Retry Interval to take effect.
{{</callout>}}

## Retry Options
Choose what should happen if the element is not found after the specified number of retries. default is `STOP`.
{{<table>}}
| Option  | Description                                      |
|---------|--------------------------------------------------|
| STOP    | Stops execution if the element is not found.     |
| SKIP    | Skips the action and proceeds to the next one.   |
| REFRESH | Refreshes the webpage and retries the action.    |
{{</table>}}

These settings apply globally unless overridden at the action level.
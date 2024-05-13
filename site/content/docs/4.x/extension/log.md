---
layout: docs
title: Log
description: Extension statistics now can be tracked in much better way
group: extension
toc: true
---

{{<callout info>}}
### Improved Logging System
We have improved logging of our extension to see the flow of extension also if it breaks any where we can pin down same.

It tracks all steps from `Configuration` -> `Batch` -> `Action` -> `Event`.

`Action` and `Batch` are grouped to understand its action better. You can collapse or expand group to have more clear view.
{{</callout>}}

{{<img extension-log.png>}}

{{<callout info>}}
#### To see logs follow below steps

- `Option + ⌘ + J` (on macOS) 
- `Shift + CTRL + J` (on Windows/Linux) / `F12`
- Open `Console` Tab
- Search `Auto Clicker - AutoFill` to filter out other logs
- Choose `Verbose` under `All levels`
{{</callout>}}
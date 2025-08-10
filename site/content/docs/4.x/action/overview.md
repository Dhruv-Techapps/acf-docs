---
layout: docs
title: Action
description: What an action is and how to configure its key properties.
group: action
toc: true
---
{{<img action.png>}}

An action combines an [element finder]({{<docsref "/action/element-finder">}}) and a [value]({{<docsref "action-value/overview">}}).
- Element finder: locates the target element on the page (multiple strategies supported).
- Value: defines what to do—leave blank to click, or supply text/commands/events. See the action value guide for all options.

{{<callout info>}}
New: You can also add a [Userscript]({{<docsref "/userscript/overview">}}) as a full action using the “Add Userscript” button next to Add Action. Enable the Userscript switch on the extension’s details page before using it. Userscripts can replace the Name, Init Wait, Repeat, and Repeat Interval fields with custom logic and run alongside other actions.
{{</callout>}}

Key properties that enhance an action:
- [init wait]({{<docsref "/action/overview#init-wait">}})
- [name]({{<docsref "/action/overview#name">}})
- [element finder]({{<docsref "/action/element-finder">}})
- [value]({{<docsref "/action-value/overview">}})
- [repeat]({{<docsref "/action/overview#repeat">}})
- [repeat interval]({{<docsref "/action/overview#repeat-interval">}})
- [disable]({{<docsref "/action/overview#disable">}})
- [addon]({{<docsref "/addon/overview">}})
- [action settings]({{<docsref "/action/action-settings">}})
- [action condition]({{<docsref "/action/action-condition">}})

{{<callout warning>}}
If the element isn’t found, the extension retries per your configuration (global or action‑level) and then follows your error handling choice. See [Retry]({{<docsref "/settings/retry">}}), [Settings]({{<docsref "/settings/overview">}}), and [Action settings]({{<docsref "/action/action-settings#error-handling">}}) for Stop, Skip Action, Refresh, or Goto Action.
{{</callout>}}

## Init Wait
Delay the start of this action by a given number of seconds. Useful when the page needs a little extra time to become ready.

Details:
- Runs only the first time the action executes (not on repeats in a loop).
- Value is in seconds and supports decimals and ranges (for example, `1.5`, `1e4`).
- Optional: if left blank, the action starts immediately.

{{<markdown>}}
{{<partial example-float.md>}}
{{</markdown >}}

## Name
A label to identify the action in your list. Optional—use any name that helps you recognize its purpose.

## Repeat
Run this action additional times after the first run. By default, an action runs once.

Details:
- Repeat = 0 or blank → run once.
- Repeat = 1 → run twice (1 extra time), and so on.
- Accepts positive integers `1` to `999`.

## Repeat Interval
Time to wait between each repeat of this action (in seconds). Supports decimals and the `aeb` range syntax for random delays.
{{<markdown>}}
{{<partial example-float.md>}}
{{</markdown >}}

## Disable
Temporarily turn off an action. Disabled actions are skipped during execution.
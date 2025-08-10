---
layout: docs
title: Action Settings
description: Overview of action settings including retry, retry interval, iframe first, and error handling.
group: action
toc: true
---
These action-level settings override the global settings and apply to both the action and its add‑on conditions. If a value isn’t specified here, the action uses the global setting.

{{<img action-settings.png>}}

## Iframe First
If an element is inside an inline iframe, enable this to search within the iframe first and then on the main page. This often improves performance when working with embedded content.

Default: off. Applicable to same‑origin iframes without a URL in the src attribute, for example:
- &lt;iframe src="about:blank">&lt;/iframe>
- &lt;iframe src="">&lt;/iframe>

If the iframe has a URL (especially a different origin), create a separate configuration targeted to that URL.

## Retry
Retries locating the target element on the page the specified number of times. Default: 5.

**Examples**
- Positive integer in the range `1`–`999`.

## Retry Interval
Waits the given number of seconds between retries when searching for the element/XPath. Default: 1 second.

{{<markdown>}}
{{<partial example-float.md>}}
{{</markdown >}}

{{<callout info>}}
If not set at the action level, the global Retry Interval is used; if the global value is also unset, the extension uses 1 second by default.
{{</callout>}}

{{<callout warning>}}
Set both Retry and Retry Interval together for predictable timing. A Retry Interval without a Retry count won’t have any effect.
{{</callout>}}


## Error handling
Choose what should happen if the element/XPath is not found after all retries.

<table class="table">
  <thead>
    <tr>
  <th>Name</th>
  <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Stop</td>
      <td>selected</td>
      <td>Stop the workflow immediately; no further actions are executed.</td>
    </tr>
    <tr>
      <td>Skip Action</td>
      <td>not selected</td>
      <td>Skip only this action and continue with the next one.</td>
    </tr>
    <tr>
      <td>Refresh</td>
      <td>not selected</td>
      <td>Reload the current page and then continue according to your configuration.</td>
    </tr>
    <tr>
      <td>Goto Action</td>
      <td>not selected</td>
      <td>Jump to a specific action in the list. You’ll be prompted to choose the destination action.</td>
    </tr>
  </tbody>
</table>

{{<callout info>}}
Default selection is Stop. The options displayed in the modal match these labels: Stop, Skip Action, Refresh, and Goto Action.
{{</callout>}}
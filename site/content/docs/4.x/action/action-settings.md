---
layout: docs
title: Action Settings
description: Overview of action settings including retry, retry interval, iframe first, and error handling.
group: action
toc: true
---
These action-level settings will take precedence over the global settings. If not specified, each action will default to the global settings.

{{<img action-settings.png>}}

## Retry
Retry finding element in webpage for number of times provided. Default is 5.

**Examples**
- positive numeric value `1` to `999`


## Retry Interval
Retry Interval will wait for number of seconds provided before retrying to find XPath of Action. Default is 1 second.

{{<markdown>}}
{{<partial example-float.md>}}
{{</markdown >}}

{{<callout info>}}
It's not a mandatory field. If left blank, the extension will start executing right away.
{{</callout>}}

{{<callout warning>}}
Repeat value is mandatory for Repeat Interval.
{{</callout>}}

## Iframe First
If an action needs to be performed on a button or input field inside an iframe, you can check this checkbox to check within the iframe first and then in the main page, which saves a lot of time. 

Default is unchecked. It's applicable to iframes which do not have a URL in the src attribute. Example:
- &lt;iframe src="about:blank">&lt;/iframe>
- &lt;iframe src="">&lt;/iframe>

If there is a URL in the src attribute, consider creating a new configuration with the targeted URL.

## Error Handling
Select what should happen if the element is not found after the number of retries.

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
      <td>Do nothing. Stop extension without proceeding further.</td>
    </tr>
    <tr>
      <td>Skip</td>
      <td>not selected</td>
      <td>Skip current action and continue to the next action.</td>
    </tr>
    <tr>
      <td>Refresh Page</td>
      <td>not selected</td>
      <td>Refresh the whole page.</td>
    </tr>
  </tbody>
</table>
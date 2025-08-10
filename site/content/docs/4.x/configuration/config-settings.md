
---
layout: docs
title: Configuration Settings
description: Detailed explanation of key configuration settings and how to use them effectively.
group: configuration
toc: true
---
{{<img configuration-settings.png>}}

## Start [ Auto | Manual ]
Start the extension automatically or manually without refreshing the page.
- Enable Manual Start
- Refresh the target page once to switch between Auto and Manual modes
- Check the [status bar]({{<docsref "/extension/status-bar">}}) to confirm Manual mode
- Press `Ctrl + Shift + A` to start the extension
- You can change the [hotkey]({{<docsref "/configuration/config-settings#hotkey">}}) in settings

## Extension Load
<table class="table">
  <thead>
    <tr>
      <th>Event Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload">Window</a>
      </td>
      <td>true</td>
      <td>
        <ul>
          <li>Loads when the entire page content is ready (stylesheets, images, subframes)</li>
          <li>Slower than Document</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event">Document</a>
      </td>
      <td>false</td>
      <td>
        <ul>
          <li>Loads without waiting for stylesheets, images, and subframes to finish loading</li>
          <li>Faster than Window</li>
        </ul>
    </tr>
  </tbody>
</table>

## Hotkey
Set a hotkey to start the extension. Use one of the following combinations:
- `Ctrl + key`
- `Ctrl + Shift + key`
- `Alt + key`
- `Alt + Shift + key`
- `Ctrl + Alt + Shift + key`

See how to set [Manual Start]({{<docsref "/configuration/config-settings#start--auto--manual-">}}).

## Google Sheet ID
Used to fetch data from a specific Google Sheet.

- The extension reads only the targeted sheet at runtime; it does not scan all sheets in your account.
- Provide the correct Sheet ID to enable Google Sheets–based actions.


## Start Time Configuration
Schedule a daily start time for a task using the `HH:mm:ss:fff` format.

**Examples:**
- **Before 12 AM**: "08:30:00:000" for 8:30 AM
- **After 12 AM**: "23:45:00:000" for 11:45 PM

{{<callout info>}}
### Important Notes:
- Execution waits until the specified time of day; it does not run immediately after a page refresh.
- Supported in Auto mode only. In Manual mode, the task is triggered by a user-defined hotkey.
{{</callout>}}

## URL Match
Match specific URLs using either exact match or regular expressions.
- **Exact Match** : Use exact match to target a specific URL.
- **Regular Expression Match** : Use regular expressions to target multiple URLs that follow a specific pattern.

**Example:**
- **Exact Match**: `https://www.example.com/page`
- **Exact Match**: `https://www.example.com/login`
- **Regex Match**: `^https://www\.example\.com/.*$`
- **Regex Match**: `^https://www\.example\.com/products/.*$`


## Bypass Browser Default
Bypass the browser's default alert, confirm, and prompt dialogs and handle them within the main window.

- **Alert**: Bypass the default alert dialog and display a custom message within the main window.
- **Confirm**: Bypass the default confirm dialog and handle the confirmation within the main window.
- **Prompt**: Bypass the default prompt dialog and handle the input within the main window.

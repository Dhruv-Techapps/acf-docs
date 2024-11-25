
---
layout: docs
title: Configuration Settings
description: Detailed explanation of various configuration settings available in the extension.
group: configuration
toc: true
---
{{<img configuration-settings.png>}}

## Start [ Auto | Manual ]
Many times you need to start extension without refreshing whole page then manual start can help you with it
- Enable Manual Start
- Refresh target page once to switch from Auto - Manual mode
- You can check [status bar]({{<docsref "/extension/status-bar">}}) to find Manual mode is enabled.
- Press `Ctrl + Shift + A` to start extension
- You can update [hotkey]({{<docsref "/configuration/config-settings#hotkey">}}) from settings

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
          <li>Extension is loaded when all content of page is loaded e.g. stylesheets, images, sub forms</li>
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
          <li>Extension is loaded without waiting for stylesheets, images, and subframes to finish loading</li>
          <li>Faster than Window</li>
        </ul>
    </tr>
  </tbody>
</table>

## Hotkey
Set hotkey to start extension, It must be combination of below 
- `Ctrl + key`
- `Ctrl + Shift + key`
- `Alt + key`
- `Alt + Shit + key`
- `Ctrl + Alt + Shit + key`

Check how to set [Manual Start]({{<docsref "/configuration/config-settings#start--auto--manual-">}})

## Google Sheet ID
It's important part for Auto Clicker Auto Fill extension to fetch the Google Sheets data. It helps extension to fetch the data from that particular sheet only. Auto Clicker Auto Fill don't fetch your entire google sheets neither look for data within sheets. It only fetches data during runtime.


## Start Time Configuration
You can configure the extension to execute a task at a specific start time each day. The start time should be provided in the `HH:mm:ss:fff` format.

**Examples:**
- **Before 12 AM**: "08:30:00:000" for 8:30 AM
- **After 12 AM**: "23:45:00:000" for 11:45 PM

{{<callout info>}}
### Important Notes:
- This function does not execute immediately upon page refresh; it waits until the specified time of day to execute.
- Currently, this functionality is supported in Auto mode only. In Manual mode, the task is triggered by a user-defined hotkey.
{{</callout>}}

## URL Match
You can configure the extension to match specific URLs using either exact match or regular expressions.
- **Exact Match** : Use exact match to target a specific URL.
- **Regular Expression Match** : Use regular expressions to target multiple URLs that follow a specific pattern.

**Example:**
- **Exact Match**: `https://www.example.com/page`
- **Exact Match**: `https://www.example.com/login`
- **Regex Match**: `^https://www\.example\.com/.*$`
- **Regex Match**: `^https://www\.example\.com/products/.*$`


## Bypass Browser Default
You can configure the extension to bypass the browser's default alert, confirm, and prompt dialogs, and handle them within the main window.

- **Alert**: Bypass the default alert dialog and display a custom message within the main window.
- **Confirm**: Bypass the default confirm dialog and handle the confirmation within the main window.
- **Prompt**: Bypass the default prompt dialog and handle the input within the main window.

---
layout: docs
title: Global Settings
description: The Global Settings section in the application provides various options to control notifications, retries, backups, integrations, and advanced features to enhance user experience. Below is a detailed explanation of each section, presented in a structured and user-friendly format.
group: settings
toc: true
---
{{<img global-settings.png>}}

## [Notification Settings]({{<docsref "settings/show-notification">}})
Notification settings allow you to control how the extension displays notifications to the user. These settings include:

{{<table>}}
| **Notification Type**          | **Description**                                                             |
|---------------------------------|-----------------------------------------------------------------------------|
| **Action Complete**            | Notifies when an individual action is completed.                            |
| **Batch Complete**             | Notifies when a batch of actions is completed.                              |
| **Configuration Complete**     | Notifies when a configuration process is completed.                         |
| **Error Notifications**        | Notifies when an error occurs during execution.                             |
{{</table>}}

Additional Options:
- **Silent Mode**: Show notifications without sound.
- **Sound Alerts**: Play a sound with notifications.
- **Discord Integration**: Connect the extension to a Discord server. When enabled:
  - Notifications (e.g., action complete, batch complete, errors) are sent to the user's Discord account.
  - Users must be part of the same Discord server and allow direct messages from server members.

## [Retry]({{<docsref "settings/retry">}})
Retry settings control how the extension handles cases where an element is not found on the page.
{{<table>}}
| **Field**            | **Type**       | **Default Value**         | **Description**                                              |
|----------------------|----------------|---------------------------|--------------------------------------------------------------|
| **Retry Count**      | Number         | `5`                       | Number of retry attempts for locating an element.            |
| **Retry Interval**   | Float (seconds)| `1`                       | Interval (in seconds) between retries.                      |
| **Retry Option**     | Dropdown       | `STOP`                    | Action to take when retries are exhausted. Options include: |
{{</table>}}

These settings apply globally unless overridden at the action level.

## [Backup]({{<docsref "settings/backup">}})
Backup settings allow users to store and manage configuration files using Google Drive.
{{<table>}}
| **Option**         | **Description**                                                                 |
|--------------------|-------------------------------------------------------------------------------|
| **Backup Frequency** | Choose when backups occur: `Daily`, `Weekly`, `Monthly`, or `Now`.           |
| **Opt-Out**         | Disable automatic backups.                                                    |
| **View Backups**    | View the current backup files stored in Google Drive.                         |
{{</table>}}

### [Google Sheets]({{<docsref "settings/google-sheets">}})
- Users can connect their Google Sheets account to fetch data and auto-fill it into web pages.

## IFrame Handling
{{<table>}}
| **Option**                | **Description**                                                                                   |
|---------------------------|---------------------------------------------------------------------------------------------------|
| **Check IFrame Enabled**  | Ensures the extension can search for elements within an iframe, provided the iframe lacks a `src`. |
| **Separate Configurations** | Required for iframes with a `src` attribute; create specific configurations for these cases.     |
{{</table>}}

## Error Handling
{{<table>}}
| **Option**                 | **Description**                                                                 |
|----------------------------|-------------------------------------------------------------------------------|
| **Reload on Error**         | Automatically reload the webpage if a technical error occurs within the extension. |
{{</table>}}

## [Status Bar Location]({{<docsref "settings/status-bar-location">}})
Users can customize the status bar's position or disable it altogether.
{{<table>}}
| **Location Options**       | **Description**                                                                 |
|----------------------------|-------------------------------------------------------------------------------|
| **Top Left**               | Places the status bar in the top-left corner of the screen.                   |
| **Top Right**              | Places the status bar in the top-right corner of the screen.                  |
| **Bottom Left**            | Places the status bar in the bottom-left corner of the screen.                |
| **Bottom Right**           | Places the status bar in the bottom-right corner of the screen.               |
| **Disabled**               | Hides the status bar.                                                         |
{{</table>}}
By configuring these global settings, users can tailor the extension to their specific needs and preferences, ensuring an optimized and seamless experience.


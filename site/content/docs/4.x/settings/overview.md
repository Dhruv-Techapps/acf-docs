---
layout: docs
title: Global Settings
description: The Global Settings section in the application provides various options to control notifications, retries, backups, integrations, and advanced features to enhance user experience. Below is a detailed explanation of each section, presented in a structured and user-friendly format.
group: settings
toc: true
---
{{<img global-settings.png>}}

- [Show Notification]({{<docsref "settings/show-notification">}})
- [Retry]({{<docsref "settings/retry">}})
- [Backup]({{<docsref "settings/backup">}})
- [Google Sheets]({{<docsref "settings/google-sheets">}})

## Check Iframes
{{<table>}}
| **Option**                | **Description**                                                                                   |
|---------------------------|---------------------------------------------------------------------------------------------------|
| **Check IFrame Enabled**  | Ensures the extension can search for elements within an iframe, provided the iframe lacks a `src`. |
| **Separate Configurations** | Required for iframes with a `src` attribute; create specific configurations for these cases.     |
{{</table>}}

## Reload on Error
Automatically reload the webpage if a technical error occurs within the extension.

- [Status Bar Location]({{<docsref "settings/status-bar-location">}})


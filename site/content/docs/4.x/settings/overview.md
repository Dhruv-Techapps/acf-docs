---
layout: docs
title: Global Settings
description: Configure notifications, retries, backups, integrations, and advanced options that apply across all configurations.
group: settings
toc: true
---
{{<img global-settings.png>}}

- [Show Notification]({{<docsref "settings/show-notification">}})
- [Retry]({{<docsref "settings/retry">}})
- [Backup]({{<docsref "settings/backup">}})
- [Google Sheets]({{<docsref "settings/google-sheets">}})
 - [Status Bar Location]({{<docsref "settings/status-bar-location">}})

## Check Iframes
{{<table>}}
| **Option**                  | **Description**                                                                                     |
|-----------------------------|-----------------------------------------------------------------------------------------------------|
| **Check IFrame Enabled**    | Allow searching for elements within iframes that do not have a `src` attribute.                    |
| **Separate Configurations** | For iframes with a `src`, create dedicated configurations targeting each iframe URL as needed.     |
{{</table>}}

## Reload on Error
Automatically reload the webpage if a technical error occurs within the extension. Useful when pages fail to initialize correctly.



layout: docs
title: Permissions
description: Why these permissions are required
group: about
toc: true
---

This page explains why the extension requests each permission and how it uses them in practice. We only use the permissions to enable the features described below and do not collect personal data.

{{<callout info>}}
#### [notifications](https://developer.chrome.com/docs/extensions/reference/notifications/)
- When a configured action encounters an error and notifications are enabled, we show a system notification with clear details (what failed and where) so you can quickly fix it.
{{</callout>}}

{{<callout info>}}
#### [contextMenus](https://developer.chrome.com/docs/extensions/reference/contextMenus/)
- Adds a right‑click menu item (e.g., "Auto Clicker Auto Fill") that lets you capture elements and create configuration faster, directly from the page.
{{</callout>}}

{{<callout info>}}
#### [downloads](https://developer.chrome.com/docs/extensions/reference/downloads/)
- Allows exporting your configurations and backups as files to your computer.
{{</callout>}}

{{<callout info>}}
#### [storage](https://developer.chrome.com/docs/extensions/reference/storage/), [unlimitedStorage](https://developer.chrome.com/docs/extensions/reference/permissions/#permission-unlimitedStorage)
- Your form‑fill and automation configurations are saved in `chrome.storage.local` for reliability.
- Some users create many or large configurations; `unlimitedStorage` removes the ~5 MB quota so your data isn’t truncated.
{{</callout>}}

{{<callout info>}}
#### [activeTab](https://developer.chrome.com/docs/extensions/reference/activeTab/)
- After you click the extension icon, this lets us inject the in‑page configuration panel and record additional steps in the current tab.
{{</callout>}}

{{<callout info>}}
#### [alarms](https://developer.chrome.com/docs/extensions/reference/alarms/)
- Schedules periodic jobs such as automatic backups and other time‑based automation (daily/weekly/monthly), when enabled.
{{</callout>}}

{{<callout info>}}
#### [identity](https://developer.chrome.com/docs/extensions/reference/identity/)
- Used to obtain an OAuth token for the Google Drive API, so we can back up configuration files to your Drive app data (app‑specific storage).
- Only the following scope is requested: https://www.googleapis.com/auth/drive.appdata
{{</callout>}}

{{<callout info>}}
#### [userScripts](https://developer.chrome.com/docs/extensions/reference/userScripts/)
- Most automation is driven by user‑defined configuration. For advanced cases, we use `chrome.userScripts` to inject secure, isolated scripts that run only where needed.
- This enables flexible automation without compromising page isolation or performance. Scripts run locally in your browser; no user data is collected.
{{</callout>}}

{{<callout info>}}
#### [scripting](https://developer.chrome.com/docs/extensions/reference/scripting/)
- Some pages rely on inline scripts that don’t receive events from the isolated world. We use `chrome.scripting.executeScript` (main world) to dispatch events and interact reliably with such pages.
- Scripts execute only as part of your configured automations or when you explicitly start them, honoring Manifest V3 world separation.
{{</callout>}}

{{<callout info>}}
#### Host Permissions
- Automation can target any website you configure. Host permissions allow the extension to read the DOM and perform actions on those sites.
{{</callout>}}


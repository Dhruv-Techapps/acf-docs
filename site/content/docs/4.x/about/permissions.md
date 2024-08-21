---
layout: docs
title: Permission
description: Why we require below permissions
group: about
toc: true
---

{{<callout info>}}
#### [notifications](https://developer.chrome.com/extensions/notifications)
- Used to display notifications in case of errors on the configuration page or when an add-on condition is not met.
{{</callout>}}

{{<callout info>}}
#### [contextMenus](https://developer.chrome.com/extensions/contextMenus)
- Allows users to access quick configuration features. Right-click any button and select "Auto Click / Auto Fill" to configure directly.
{{</callout>}}

{{<callout info>}}
#### [downloads](https://developer.chrome.com/extensions/downloads)
- Required to export the user-created configuration.
{{</callout>}}

{{<callout info>}}
#### [storage](https://developer.chrome.com/extensions/storage), [unlimitedStorage](https://developer.chrome.com/extensions/unlimitedStorage)
- Used to store and manage configurations created by users.
{{</callout>}}

{{<callout info>}}
#### [activeTab](https://developer.chrome.com/extensions/activeTab)
- Allows the extension to identify and interact with the current tab where automation is being executed.
{{</callout>}}

{{<callout info>}}
#### [alarms](https://developer.chrome.com/extensions/alarms)
- Utilized for setting up periodic backups if the user enables this feature.
{{</callout>}}
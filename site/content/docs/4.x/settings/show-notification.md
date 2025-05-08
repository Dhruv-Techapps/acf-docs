---
layout: docs
title: Settings · Show Notification
description: Notification settings allow you to control how the extension displays notifications to the user. These settings include
group: settings
toc: true
---

{{<img settings-show-notifications.png>}}

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

{{<callout warning>}}
#### ! Important
This is very important feature of extension which tells you if any error occur in extension while executing. Or if any XPath provided is not found or wrong. Select this option while configuring and uncheck once you have finished configuring.
{{</callout>}}

{{<callout info>}}
We offer 10 free Discord calls per user each month — perfect for testing and trying out our features. This limit resets monthly, giving you a fresh opportunity to explore our capabilities.

Need more? [Upgrade to the Pro]({{<docsref "/about/subscription">}}) version to unlock unlimited API access and boost your productivity without restrictions. This upgrade allows you to maximize productivity without worrying about daily limits.
{{</callout >}}
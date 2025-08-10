---
layout: docs
title: Settings · Backup
description: Back up and restore your configurations safely using Google Drive (App Data folder)
group: settings
toc: true
---

{{<img settings-backup.png>}}

Backups use your Google Drive’s App Data folder, which is private to the extension. This requires the [https://www.googleapis.com/auth/drive.appdata](https://developers.google.com/drive/api/guides/appdata) scope.

Important
- The App Data scope does not grant access to your entire Drive; it only allows storing data in an application‑specific folder.
- On first backup, the extension requests permission and then securely uploads your configurations and settings.

You can review or revoke access under Google Drive Settings → Manage Apps: https://drive.google.com/drive/u/0/settings

### Backup Option
- Backup Now: Immediately back up your current configurations and settings.
- Auto Backup:
  - Daily: Back up once per day.
  - Weekly: Back up once per week.
  - Monthly: Back up once per month.
  - Off: Disable automatic backups.

### Restore Configuration
Restoring replaces your existing configurations and settings with the latest backup from Google Drive. This action cannot be undone.
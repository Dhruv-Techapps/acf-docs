---
layout: docs
title: Settings · Backup
description: Backup / Retrieve your configuration safely on your Google Drive
group: settings
toc: true
---

{{<img settings-backup.png>}}

It require [https://www.googleapis.com/auth/drive.appdata](https://developers.google.com/drive/api/guides/appdata) scope of your Google Drive and Google create application specific folder in your Google drive to store the configuration safely. This above scope don't allow application access to your entire Google Drive. instead it creates application specific folder which can be accessed by Auto Clicker Auto Fill extension.

It will ask your permission first time when you click on Backup and Auto Clicker Auto Fill extension will authenticate and upload your Configuration and Settings safely.

You can go and check same under Manage Apps section of settings https://drive.google.com/drive/u/0/settings. You can revoke or remove access from here.

### Backup Option
- Backup Now : Auto Clicker Auto Fill extension will instantly do backup of your current configuration 
- Auto Backup
  - Daily - extension will backup daily basis
  - Weekly - extension will backup weekly basis
  - Monthly - extension will backup monthly basis
  - Off - extension will stop auto backup of configuration and settings.

### Restore Configuration
This process is irreversible, it will override configuration and settings in your configuration page from latest backup from Google Drive.
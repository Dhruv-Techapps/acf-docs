---
layout: docs
title: Settings · Google Sheets
description: Extension can fetch the values from your Google Sheets and fill the forms on behalf of you.
group: settings
toc: true
---

{{<img global-settings.png>}}

### Google Sheets Login
Auto Clicker Auto Fill needs read‑only access to your Google Sheets to fetch cell values. Click `Connect with Google Sheets` and grant the following scopes.

### Google Sheets Scope
- `https://www.googleapis.com/auth/spreadsheets.readonly`
- `https://www.googleapis.com/auth/userinfo.profile`

> After you connect with Google Sheets go to configuration settings and add [Google Sheet ID]({{<docsref "/configuration/config-settings#google-sheet-id">}})

{{<img settings-google-sheets.png>}}

{{<callout danger>}}
Google may show a warning for apps not yet fully verified for production. To proceed during development/testing, click Advanced → `Go to Auto Clicker Auto Fill (unsafe)`.
{{<img settings-google-sheets-error.png>}}
{{</callout>}}
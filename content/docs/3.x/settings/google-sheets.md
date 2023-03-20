---
layout: docs
title: Google Sheets
description: Extension can fetch the values from your Google Sheets and fill the forms on behalf of you.
group: settings
toc: true
---
Available on <span class="badge bg-danger me-2">DEV</span><span class="badge bg-warning me-2">BETA</span>
<hr/>

{{<img settings.png>}}

### Google Sheets Login
Auto Clicker Auto Fill extension require your google sheets readonly permission in order to read cell values from it. It require below two scopes. Click on `Connect with Google Sheets`

### Google Sheets Scope
- `https://www.googleapis.com/auth/spreadsheets.readonly`
- `https://www.googleapis.com/auth/userinfo.profile`

> After you connect with Google Sheets go to configuration settings and add [Google Sheet ID]({{<docsref "/config-settings/google-sheet-id">}})

{{<img settings-google-sheets.png>}}

{{<callout danger>}}
### DEV and BETA
on DEV and BETA version of Auto Clicker Auto Fill extension Google may warn you with below error as Google only review application which are in production version and not which are in Development or testing phase. In order to proceed click on Advance and `Go to  Auto Clicker Auto Fill (unsafe)` This step is for DEV and BETA version only.
{{<img settings-google-sheets-error.png>}}
{{</callout>}}
---
layout: docs
title: Google Sheets
description: Connect with your google account and fill form using google sheets data directly in iterative manner.
group: action-value
toc: true
---

Before using Google Sheets Value please do connect extension with [Google Sheets]({{<docsref "/settings/google-sheets">}}) and add [Google Sheet ID]({{<docsref "/config-settings/google-sheet-id">}})

You can use [Google Sheets A1 Notation](https://developers.google.com/sheets/api/guides/concepts#:~:text=The%20Google%20Sheets%20API%20is,Update%20spreadsheet%20formatting) to fetch the cell value

<table class="table">
  <thead>
    <tr>
      <th scope="col"  width="210px">GoogleSheets::A1 Notation</th>
      <th scope="col">Description (Copy cell value from Google Sheet)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">GoogleSheets::Sheet1!A1</th>
      <td>
        Fetch the A1 Cell value from Sheet1
      </td>
    </tr>
    <tr>
      <th scope="row">GoogleSheets::Sheet1!B1</th>
      <td>
        Fetch the B1 Cell value from Sheet1
      </td>
    </tr>
    <tr>
      <th scope="row">GoogleSheets::Sheet1!C&lt;batchRepeat&gt;</th>
      <td>
        Batch Repeat is combined with this Action and for Repeat value 0, 1, ....N it fetches values from Cell C1, C2,.... CN+1
      </td>
    </tr>
    <tr>
      <th scope="row">GoogleSheets::Sheet1!C&lt;sessionCount&gt;</th>
      <td>
        count will be maintained in session so if page require to submit/refresh/reopen the page it will continue from where it was left until its opened in new tab
      </td>
    </tr>
  </tbody>
</table>
Available on <span class="badge bg-danger me-2">DEV</span><span class="badge bg-warning">Beta</span>
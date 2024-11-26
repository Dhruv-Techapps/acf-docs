---
layout: docs
title: Addon · Condition
description: Add condition which you can check before performing action
group: addon
toc: true
---
You can specify what condition you need to apply.<br/>
(a) - value or text of element<br/>
(b) - value provided in configuration page field.

{{<table>}}
| `Name`                  | Type            | Description                             |
|-----------------------|-----------------|-----------------------------------------|
| `Equals`              | String | Number | (a) should be equal to (b)              |
| `Not Equals`          | String | Number | (a) should not be equal to (b)          |
| `Contains`            | String | Number | (a) contains (b)                        |
| `Not Contains`        | String | Number | (a) does not contain (b)                |
| `Greater Than`        | Number          | (a) is greater than (b)                 |
| `Lesser Than`         | Number          | (a) is lesser than (b)                  |
| `Greater Than Equals` | Number          | (a) is greater than or equals to (b)    |
| `Lesser Than Equals`  | Number          | (a) is lesser than or equals to (b)     |
| `Is Checked`          | Boolean         | (a) is checked                          |
| `Is Not Checked`      | Boolean         | (a) is not checked                      |
{{</table>}}

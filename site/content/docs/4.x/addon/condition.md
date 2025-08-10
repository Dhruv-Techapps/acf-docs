---
layout: docs
title: Addon · Condition
description: Define how the Addon compares the page value (a) to your input (b) before the Action runs.
group: addon
toc: true
---
Choose a comparison to apply:
- (a) is the page value (text or attribute) captured by the Addon’s Element Finder, or a function result.
- (b) is the value you provide in the Addon’s input field.

{{<table>}}
| `Name`                  | Types              | Description                              |
|-------------------------|--------------------|------------------------------------------|
| `Equals`                | String, Number     | (a) equals (b)                           |
| `Not Equals`            | String, Number     | (a) is not equal to (b)                  |
| `Contains`              | String             | (a) contains (b)                         |
| `Not Contains`          | String             | (a) does not contain (b)                 |
| `Greater Than`          | Number             | (a) > (b)                                |
| `Less Than`             | Number             | (a) < (b)                                |
| `Greater Than Or Equal` | Number             | (a) ≥ (b)                                |
| `Less Than Or Equal`    | Number             | (a) ≤ (b)                                |
| `Is Checked`            | Boolean            | Checkbox/radio is checked                |
| `Is Not Checked`        | Boolean            | Checkbox/radio is not checked            |
{{</table>}}

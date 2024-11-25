---
layout: docs
title: Addon
description: In order to check some condition before clicking / filling add addon to that specific Action. You can add condition by clicking on __</>__ icon which appears when you hover over action row.
group: addon
toc: true
---
## Addon Overview
The Addon class is used to validate certain values on a webpage before executing actions on it. It can check for specific text on the webpage, including browser default functions like date and location checks. The value to be checked can be within a text field, an attribute of an element, or any other part of the webpage.

### [String Value Comparisons]({{<docsref "/addon/condition">}})
- Equal
- Not equal
- Contains

### [Numeric Value Comparisons]({{<docsref "/addon/condition">}})
- Greater than
- Lesser than
- Greater than or equal to
- Lesser than or equal to

### [Value Extractor]({{<docsref "/addon/value-extractor">}})
The Addon class includes a Value Extractor that can extract specific text from a larger string, such as extracting numbers from a string. It also supports regular expressions for data extraction.

### [Recheck]({{<docsref "/addon/recheck">}}) [Recheck Interval]({{<docsref "/addon/recheck-interval">}}) [Recheck Options]({{<docsref "/addon/recheck-options">}})
The Addon class provides an option to recheck the value if there is a delay in the value appearing or updating. The recheck options include:
- Refresh the page
- Skip the action
- Go to a specific action

{{<img addon.png>}}
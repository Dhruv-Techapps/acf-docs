---
layout: docs
title: URL
description: Provide the target URL where actions will run. Use a single URL or a regular expression to match multiple pages.
group: configuration
toc: true
---

{{<img configuration.png>}}

{{<callout>}}
This is the target URL where the extension executes actions. You may use a plain URL or a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to match multiple pages.
{{</callout>}}

### Examples

##### https://www.instagram.com/dhruv.techapps/

* `https://www.instagram.com/dhruv.techapps/`
* `https://www.instagram.com/dhruv`
* `https://www.instagram.com/`
* `https://.*.instagram.com/`
* `.*://.*.instagram.com/`
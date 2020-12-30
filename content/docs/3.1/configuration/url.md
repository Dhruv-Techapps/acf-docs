---
layout: docs
title: URL
description: You need to paste the URL of site on which you need automate click / fill functionality. You can simply copy and paste the URL or you can also use regular expression to cover more than one URL.
group: configuration
toc: true
---

{{<img configuration.png>}}

{{<callout>}}
This is target url on which extension will execute all its action. its value can be provided in [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern. Below all values will match and execute on 
{{</callout>}}

### Examples

##### https://dhruv-techapps.github.io/auto-click/test.html

* `https://dhruv-techapps.github.io/auto-click/test.html`
* `https://dhruv-techapps.github.io/auto-click/`
* `https://dhruv-techapps.github.io/auto-click/`
* `https://dhruv-techapps.github.io/`
* `https://.*.github.io/`
* `.*://.*.github.io/`
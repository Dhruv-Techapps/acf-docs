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

##### https://www.instagram.com/dhruv.techapps/

* `https://www.instagram.com/dhruv.techapps/`
* `https://www.instagram.com/dhruv`
* `https://www.instagram.com/`
* `https://.*.instagram.com/`
* `.*://.*.instagram.com/`
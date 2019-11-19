---
menu: docs
title:  "Configuration"
tags: [configuration, configuration list, configuration url, enable, disable, refresh ,batch, action, start time, XPath, Value,repeat, repeat interval, r-interval]
---

# Configuration

![Configuration]({{'/assets/img/configuration.png' | relative_url }}){:width="100%"}

This is main part of configuration section you need to provide url of site in which you need to Auto click / Auto Fill.

---

## Enable / Disable
If you dont want to disable / stop particular configuration temporary to fill / click, you can disable it by switching it off.

---

## URL
You need to paste the URL of site on which you need automate click / fill functionality. You can simply copy and paste the URL or you can also use regular expresion to cover more than one URL.

This is target url on which extension will execute all its action. its value can be provided in [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern. Below all values will match and execute on 

### Example

**URL** 

`https://dhruv-techapps.github.io/auto-click/test.html`

**Value:**

* `https://dhruv-techapps.github.io/auto-click/test.html`
* `https://dhruv-techapps.github.io/auto-click/`
* `https://dhruv-techapps.github.io/auto-click/`
* `https://dhruv-techapps.github.io/`
* `https://.*.github.io/`
* `.*://.*.github.io/`


---

## Refresh
If you want your site to be refresh after all the [Action](/docs/action) are completed successfully you can do that by checking refresh box.

{:.bd-callout .bd-callout-warning}
> Refresh functionality will only trigger once all the actions are completed successfully.

{:.bd-callout .bd-callout-danger}
> It dont work with [Batch Repeat](batch-repeat) functionlity. You can either use batch repeat or page refresh.

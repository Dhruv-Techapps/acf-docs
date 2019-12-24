---
menu: docs
title:  "Configuration"
tags: [configuration, configuration list, configuration url, enable, disable, refresh ,batch, action, start time, XPath, Value,repeat, repeat interval, r-interval]
---

{:.bd-title}
# Configuration

{:.bd-lead}
This is main part of configuration section you need to provide url of site in which you need to Auto click / Auto Fill.

> ![Configuration]({{'/assets/img/configuration.png' | relative_url }}){:width="100%"}

## Enable / Disable
If you dont want to disable / stop particular configuration temporary to fill / click, you can disable it by switching it off.

---

## URL
You need to paste the URL of site on which you need automate click / fill functionality. You can simply copy and paste the URL or you can also use regular expresion to cover more than one URL.

This is target url on which extension will execute all its action. its value can be provided in [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern. Below all values will match and execute on 

### <kbd>Examples</kbd>

{:.bd-example}
##### `https://dhruv-techapps.github.io/auto-click/test.html`

{:.highlight}
> * `https://dhruv-techapps.github.io/auto-click/test.html`
> * `https://dhruv-techapps.github.io/auto-click/`
> * `https://dhruv-techapps.github.io/auto-click/`
> * `https://dhruv-techapps.github.io/`
> * `https://.*.github.io/`
> * `.*://.*.github.io/`

---

## Name
You can set the name for an configuration to identify it easily and same will be displayed in configuration list dropdown.

---

## Start Time
You can set the start time for an extension when it need to start so you dont miss your important task to be missed out when you are busy with your other important work. It should be provided in 24 hours format `hh:mm:ss`. This is developed as per user need. It can be left 'blank'.

### <kbd>Examples</kbd>
* `13:00:00` at afternoon 1 PM
* `00:00:00` at midnight 12 AM
* `15:15:15` at afternoon 3 PM and 15 mins and 15 seconds
*  `empty` | `blank` start immediately

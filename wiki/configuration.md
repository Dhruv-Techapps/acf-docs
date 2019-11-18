# Configuration

![Configuration](/assets/img/configuration.PNG)

 This is main part of configuration section you need to provide url of site in which you need to Auto click / Auto Fill.
- [Configuration](#configuration)
  - [Enable / Disbale](#enable--disbale)
  - [* URL](#url)
    - [Example](#example)
  - [Refresh](#refresh)

---

## Enable / Disbale
If you dont want to disable / stop particular configuration temporary to fill / click, you can disable it by switching it off.

---

## <span style="color:red;">*</span> [URL](configuration/url.md)
You need to paste the URL of site on which you need automate click / fill functionality. You can simply copy and paste the URL or you can also use regular expresion to cover more than one URL. For more details [click here](configuration/URL.md)



### Example

URL - `https://dhruv-techapps.github.io/auto-click/test.html`

Value:

* `https://dhruv-techapps.github.io/auto-click/test.html`
* `https://dhruv-techapps.github.io/auto-click/`
* `https://dhruv-techapps.github.io/auto-click/`
* `https://dhruv-techapps.github.io/`
* `https://.*.github.io/`
* `.*://.*.github.io/`

---

## Refresh
If you want your site to be refresh after all the [Action](action.md) are completed successfully you can do that by checking refresh box.

> Refresh functionality will only trigger once all the actions are completed successfully.


> It dont work with [Batch Repeat](batch-repeat.md) functionlity. You can either use batch repeat or page refresh.

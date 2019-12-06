---
menu: docs
title:  "Batch"
tags: [configuration, configuration list, configuration ,batch, action, start time, XPath, Value,repeat, repeat interval, r-interval]
---

{:.bd-title}
# Batch

{:.bd-lead}
Batch is group of [action](action) which can be repeated with interval. It consist of 4 parts 

> ![Batch]({{'/assets/img/batch.png' | relative_url }}){:width="100%"}

---

## Refresh
If you want your site to be refresh after all the [action](action) are completed successfully you can do that by checking refresh box.

{:.bd-callout .bd-callout-warning}
> Note: Refresh functionality will only trigger once all the actions are completed successfully.

{:.bd-callout .bd-callout-danger}
> #### Refresh will override Batch Repeat  
> It dont work with [Repeat](#repeat) functionlity. You can either use batch repeat or page refresh.

---

## Init Wait
Init Wait stands for Initial Wait. Initial Wait to start particular batch/action. Waiting time is provided in `sec`. It can be used were extension need to wait few more sec for page to load fully before starting its process.

{% include_relative float-number-example.md %}

---

## Repeat
If you want specific batch to repeat more than once you can provide repeat value. 

{% include_relative integer-number-example.md %}

---
## Repeat Interval
If you want to control the time between each repeat you can provide repeat-interval as well.

{% include_relative float-number-example.md %}
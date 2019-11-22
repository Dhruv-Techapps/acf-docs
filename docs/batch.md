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

## Start Time
You can set the start time for an extension when it need to start so you dont miss your important task to be missed out when you are busy with your other important work. It should be provided in 24 hours format `hh:mm:ss`. This is developed as per user need. It can be left 'blank'.

### <kbd>Examples</kbd>
* `13:00:00` at afternoon 1 PM
* `00:00:00` at midnight 12 AM
* `15:15:15` at afternoon 3 PM and 15 mins and 15 seconds
*  `empty` | `blank` start immediately

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
---
layout: docs
title: Configuration
description: This is main part of configuration section you need to provide url of site in which you need to Auto clicker - AutoFill.
group: configuration
toc: true
---

{{<img configuration.png>}}

Configuration is everything in extension. Every things extension does are instructed using configuration only. You need to configuration your site in order to automate it.


It consist of below parts
- [Name]({{<docsref "/configuration/name">}}) - to uniquely identify a configuration or to add some information you can write it in name which helps you easily identify what this configuration is all about and what its going to do.
- [URL]({{<docsref "/configuration/url">}}) - This is one of the main part of configuration every configuration starts from here only. It can contain plain URL or regex expression to match particular URL. if a site is opened and it matches this URL in configuration it takes all action from configuration and perform on site. If there are more than one configuration which matches the URL of page it will take the first configuration from list. and hence order of configuration is important.
- [Init Wait]({{<docsref "/configuration/init-wait">}}) - many times our page take one or two sec to load completely this is totally dependent on site where its hosted or where its being accessed from . using which device or browser we are accessing. what is our network strength. all this things make page load faster or slow. Also there is scenario where page is loaded but you see loader in page and content is loaded later. This is because of single page application platform. In all above cases you can added init wait which makes extension to wait for that particular amount of time before starting execution.
- [Enable]({{<docsref "/configuration/enable-disable">}}) - This switch function is not that much used but it can be handy when you want to disable any particular configuration.
- [Export & Import]({{<docsref "/configuration/export-import">}}) - Export and Import configuration is used when you want to take backup of your configuration or share your configuration with some one. you can simply export your configuration and inform your friend to import that configuration. One important point here is it dont export settings from global if there is any specific setting in global you need to take screen shot and share.
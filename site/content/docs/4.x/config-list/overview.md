---
layout: docs
title: Configuration List
description: Configuration list / dropdown is list of all configuration you have within extension. you can see all the list with its name or by there URL . it also have information like if the configuration is disabled or not.
group: config-list
toc: true
---


{{<img configuration-list-with-options.png>}}

- [Select Configuration]({{<docsref "/config-list/select-configuration">}}) - switch between different configuration you have within Auto Clicker Auto Fill extension. It give high level overview of configuration with name or url. Also it provide information on disabled/enabled state of configuration.
- [Add Configuration]({{<docsref "/config-list/add-configuration">}}) - Button is used to add new configuration into extension. It adds plain configuration with just configuration name. 
- [Bulk Export Configuration]({{<docsref "/config-list/bulk-export">}}) - Button is used to export all configuration into single json file. Bulk Export configuration in array format. Configuration which are exported using Bulk Export button can be imported as bulk configuration only. We have single configuration export and import feature as well. 
- [Bulk Import Configuration]({{<docsref "/config-list/bulk-import">}}) - Button is used to import configurations which are exported in bulk using Bulk export button. It throw error when a user import configuration which is exported using Export Configuration and not Bulk Export Configuration
- [Bulk Remove Configuration]({{<docsref "/config-list/bulk-remove">}}) - Removing single configuration can be difficult so we have now bulk remove button using which you can multi select configuration and remove/delete them easily.
- [Reorder Configuration]({{<docsref "/config-list/reorder">}}) - Order of configuration plays main role. When you have two configuration with same url or similar url pattern the configuration which matches first gets picked and the other ones are not used. Sometime you may need to change the order of configuration in order to get picked for different set of url
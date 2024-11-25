---
layout: docs
title: Configuration
description: This is main part of configuration section you need to provide url of site in which you need to Auto clicker - AutoFill.
group: configuration
toc: true
---

{{<img configuration.png>}}

# Configuration Documentation

The **Configuration** section is the core of the extension, serving as the starting point for all tasks performed by actions. Below is a detailed explanation of its fields and features:

## Key Fields

### [URL]({{<docsref "configuration/url">}})
- **Description**: This is the most crucial part of a configuration. It determines where the configuration applies.
- **Details**:
  - Can contain a plain URL or a regular expression (regex) to match specific URLs.
  - When a site matches the URL in a configuration, all actions defined in that configuration are performed on the site.
  - If multiple configurations match the page URL, the first configuration in the list is used. Hence, **the order of configurations is important**.

### Name
- **Description**: Helps make the configuration readable.
- **Details**:
  - Defaults to the URL’s origin or base URL but can be edited.
  - Can be left empty without affecting execution.

### Init Wait
- **Description**: Sets a delay before execution starts to accommodate page loading times.
- **Details**:
  - Useful for pages with slow loading times or content that loads asynchronously (e.g., single-page applications).
  - Configurable based on factors like device, browser, and network speed.

### Enable
- **Description**: A toggle to enable or disable the configuration.
- **Details**:
  - Handy for temporarily disabling configurations without deleting them.

### Export
- **Description**: Exports a single configuration in JSON format for backup or sharing.

### Import
- **Description**: Imports a single configuration into the extension.
- **Details**:
  - Adds the configuration even if one with the same URL or name already exists.

### Duplicate
- **Description**: Creates a duplicate of the configuration and adds it to the list.

### [Config Settings]({{<docsref "configuration/config-settings">}})
- **Description**: Allows customization of configuration behavior.
- **Details**:
  - **Start Triggers**: Define whether the configuration starts when the window or document loads.
  - **Auto/Manual Start**: Options for automatic start or manual trigger via a hotkey.
  - **Start Time**: Specifies a time of day for execution to begin.
  - **Google Sheets ID**: Allows actions to fetch data from a Google Sheet.
  - **URL Match Options**: Choose between regex or exact match.
  - **Alert Overrides**: Option to bypass default browser alerts, confirms, and prompts.

### [Batch]({{<docsref "configuration/batch">}})
- **Description**: Groups actions together for repeated execution.
- **Details**:
  - Includes fields for repeat count, repeat interval, and refresh.

### [Action]({{<docsref "configuration/action">}})
- **Description**: Represents individual tasks to be performed.
- **Details**:
  - Fields include element finder, value, and conditions for execution.
  - Allows overriding global settings for specific actions.

---

This detailed documentation ensures users can understand and utilize the Configuration section effectively, enabling smooth automation and task execution.


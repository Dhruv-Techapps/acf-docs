---
layout: docs
title: Configuration List
description: The Configuration List provides an organized view of all the configurations stored in the extension, making it easier for users to manage and utilize them effectively. Here are the detailed features and functionalities of the Configuration List section
group: config-list
toc: true
---
{{<img configuration-list-with-options.png>}}

## Features
{{<table>}}
| **Feature**                     | **Description**                                                                 |
|---------------------------------|---------------------------------------------------------------------------------|
| **New Config Button** | A button located at the top-left of the list to create a new configuration. |
| **View by Name or URL**         | Configurations can be displayed by name, URL, or both.                         |
| **Search Box**                  | Filter configurations by name or URL for quick access.                         |
| **View Details**                | Selecting a configuration displays its details on the right-hand side.          |
| **Delete Configuration**        | Hover over a configuration to reveal a delete icon on the leftmost side. Click to delete the configuration. |
| **Toggle View**                 | Change the display format to show either the name, URL, or both.                |
{{</table>}}

## How to Use
1. **Viewing Configurations**:
   - Navigate through the list of configurations.
   - Use the search box to filter results by name or URL.
   - Select a configuration to view its details in the right-hand panel.

2. **Deleting Configurations**:
   - Hover over the configuration item.
   - A delete icon will appear on the leftmost side.
   - Click the delete icon to remove the configuration.

3. **Changing Display Format**:
   - Use the toggle view option to switch between displaying the name, URL, or both.

## Best Practices

- Regularly review your list of configurations to ensure they are up-to-date and relevant.
- Use meaningful names for configurations to make filtering and searching more efficient.
- Backup important configurations using the global settings to avoid accidental loss.

By effectively utilizing the Configuration List, users can streamline their workflows and maintain an organized repository of configurations for the extension.

## Other Features
- [Bulk Export Configuration]({{<docsref "/config-list/bulk-export">}}) - Button is used to export all configuration into single json file. Bulk Export configuration in array format. Configuration which are exported using Bulk Export button can be imported as bulk configuration only. We have single configuration export and import feature as well. 
- [Bulk Import Configuration]({{<docsref "/config-list/bulk-import">}}) - Button is used to import configurations which are exported in bulk using Bulk export button. It throw error when a user import configuration which is exported using Export Configuration and not Bulk Export Configuration
- [Bulk Remove Configuration]({{<docsref "/config-list/bulk-remove">}}) - Removing single configuration can be difficult so we have now bulk remove button using which you can multi select configuration and remove/delete them easily.
- [Reorder Configuration]({{<docsref "/config-list/reorder">}}) - Order of configuration plays main role. When you have two configuration with same url or similar url pattern the configuration which matches first gets picked and the other ones are not used. Sometime you may need to change the order of configuration in order to get picked for different set of url
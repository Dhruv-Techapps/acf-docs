---
layout: docs
title: Configuration List
description: Browse, search, and manage all saved configurations in one place.
group: config-list
toc: true
---
{{<img configuration-list-with-options.png>}}

## Features
{{<table>}}
| Feature                 | Description                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| New Config              | Create a new configuration from the top-left action.                        |
| View by Name/URL        | Toggle the list to show Name, URL, or both.                                 |
| Search                  | Filter configurations by Name or URL for quick access.                      |
| View Details            | Select a configuration to see details in the right-hand panel.              |
| Delete                  | Hover to reveal the delete icon (leftmost) and click to remove an item.     |
| Toggle View             | Switch display format (Name, URL, or both) to reduce clutter.               |
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
- Review configurations periodically to keep them accurate and relevant.
- Use meaningful names to improve filtering and search.
- Back up important configurations (see [Backup]({{<docsref "/settings/backup">}})).

By using the Configuration List effectively, you can streamline your workflow and keep an organized repository of configurations.

## Other Features
- [Bulk Export]({{<docsref "/config-list/bulk-export">}}): Export all configurations to a single JSON file (array format). Bulk exports can be restored via Bulk Import.
- [Bulk Import]({{<docsref "/config-list/bulk-import">}}): Import a JSON file previously created with Bulk Export. Other formats will be rejected.
- [Bulk Remove]({{<docsref "/config-list/bulk-remove">}}): Select multiple configurations and delete them at once.
- [Reorder]({{<docsref "/config-list/reorder">}}): Change priority. When multiple configurations match the same URL, the first match in the list wins.
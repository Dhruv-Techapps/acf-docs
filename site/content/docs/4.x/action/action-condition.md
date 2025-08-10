---
layout: docs
title: Action Condition
description: Configure conditions that test statuses (DONE/SKIPPED) of previous actions. If conditions match, the current action runs; if not, apply a fallback (Stop, Skip Action, Refresh, or Goto Action).
group: action
toc: true
---

{{<img action-condition.png>}}

{{<callout info>}}
#### Action Condition 
- Available from the second [Action]({{<docsref "/action/overview">}}) onward (the first action has no previous status to check).
- Can reference the status of any earlier action—not just the immediately preceding one.
{{</callout>}}

### Action Condition modal

Use the conditions grid to define how the current action should react to the results of previous actions. When the combined condition evaluates to true, the action is processed. When it evaluates to false (not matched), a fallback option is applied.

{{<img action-condition-modal.png>}}

#### Conditions
Define one or more rows that evaluate the status of earlier actions. Combine rows with logical operators `AND` and `OR`.

Columns:
- OPR: Operator that combines this row with the previous one (`AND` or `OR`). Defaults to `AND`.
- Action: The previous [Action]({{<docsref "/action/overview">}}) whose status you want to check.
- Status: The status to compare against (`DONE` or `SKIPPED`).
- Controls: Add or remove condition rows.

Status semantics:
- An action is `DONE` when it completed successfully.
- An action is `SKIPPED` when it was skipped due to its own conditions or flow control.

When you have multiple rows, the OPR controls how they are combined. Truth table examples:

<table class="table">
  <thead>
    <tr>
      <th scope="col">Action 1 status result</th>
      <th scope="col">OPR</th>
      <th scope="col">Action 2 status result</th>
  <th scope="col">Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="text-success">true</td>
      <td >OR</td>
      <td class="text-success">true</td>
      <th scope="row" class="text-success">true</th>
    </tr>
    <tr>
      <td class="text-success">true</td>
      <td>OR</td>
      <td class="text-danger">false</td>
      <th scope="row" class="text-success">true</th>
    </tr>
    <tr>
      <td class="text-danger">false</td>
      <td>OR</td>
      <td class="text-success">true</td>
      <th scope="row" class="text-success">true</th>
    </tr>
    <tr>
      <td class="text-danger">false</td>
      <td>OR</td>
      <td class="text-danger">false</td>
      <th scope="row" class="text-danger">false</th>
    </tr>
    <tr>
      <td class="text-success">true</td>
      <td >AND</td>
      <td class="text-success">true</td>
      <th scope="row" class="text-success">true</th>
    </tr>
    <tr>
      <td class="text-success">true</td>
      <td>AND</td>
      <td class="text-danger">false</td>
      <th scope="row" class="text-danger">false</th>
    </tr>
    <tr>
      <td class="text-danger">false</td>
      <td>AND</td>
      <td class="text-success">true</td>
      <th scope="row" class="text-danger">false</th>
    </tr>
    <tr>
      <td class="text-danger">false</td>
      <td>AND</td>
      <td class="text-danger">false</td>
      <th scope="row" class="text-danger">false</th>
    </tr>
  </tbody>
</table>

#### When conditions are not matched
If the combined condition evaluates to false, select one of the fallback options shown in the modal:
- Stop — end the workflow and do not execute further actions.
- Skip Action — move to the next action.
- Refresh — reload the current page before continuing.
- Goto Action — jump to a specific action in the list (you’ll be prompted to choose which action).

Behavior summary:

<table class="table">
  <thead>
    <tr>
  <th scope="col">Conditions matched?</th>
  <th scope="col">Selected option</th>
  <th scope="col">Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="text-success">true</td>
  <td>—</td>
      <th scope="row">Process Action</th>
    </tr>
    <tr>
      <td class="text-danger">false</td>
  <td>Stop</td>
      <th scope="row">Stop Action</th>
    </tr>
    <tr>
      <td class="text-danger">false</td>
  <td>Skip Action</td>
      <th scope="row">Skip Action</th>
    </tr>
    <tr>
      <td class="text-danger">false</td>
  <td>Refresh</td>
      <th scope="row">Refresh the page</th>
    </tr>
    <tr>
      <td class="text-danger">false</td>
  <td>Goto Action</td>
  <th scope="row">Go to specified action</th>
    </tr>
  </tbody>
</table>
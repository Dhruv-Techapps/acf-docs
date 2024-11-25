---
layout: docs
title: Action Condition
description: Action condition are used to check status (`SKIPPED` or `DONE`) of previous executed actions and `Skip` or `Process` current Action
group: action-condition
toc: true
---

{{<img action-condition.png>}}

{{<callout info>}}
#### Action Condition 
- Action condition are available from second [Action]({{<docsref "/action/overview">}}) only. As first [Action]({{<docsref "/action/overview">}}) do not have previous action status to check.
- Action condition can check status of all previous action and not just immediate previous action status
{{</callout>}}

### Action Condition Modal

Action Condition consist of two part [IF]({{<docsref "/action-condition/overview#if">}}) and [THEN]({{<docsref "/action-condition/overview#then">}})

{{<img action-condition-modal.png>}}

#### IF
From name itself its clear that its the place where you configure your condition. you can add more than one condition with operator like `OR` and `AND` to it. It consist of three column. OPR (operator condition), Previous [Action]({{<docsref "/action/overview">}}) (whose status need to check), Status of previous action which need to be checked. And there is one more column which is to add or remove condition.

Action column is used to select the action for which status need to be checked.

Status column is simple which need to be check for that particular action. There are two status only for action which are `SKIPPED` or `DONE`. If by any condition on action if its skipped to next action its status is set as `SKIPPED` and if that action is completed successfully its status is set as `DONE`.

If you have more than one condition you need to select OPR. OPR are either `OR` / `AND`. By default `AND` is selected. These operator result as below.

<table class="table">
  <thead>
    <tr>
      <th scope="col">Action 1 status result</th>
      <th scope="col">OPR</th>
      <th scope="col">Action 2 status result</th>
      <th scope="col">result</th>
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

#### THEN
This component is dependent on IF statement based on the final result of IF statement. Then has only two option to be selected `SKIP` / `PROCEED`. Below table show how it works.

<table class="table">
  <thead>
    <tr>
      <th scope="col">IF</th>
      <th scope="col">THEN</th>
      <th scope="col">result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="text-success">true</td>
      <td >SKIP</td>
      <th scope="row">SKIP</th>
    </tr>
    <tr>
      <td class="text-danger">false</td>
      <td >SKIP</td>
      <th scope="row">PROCEED</th>
    </tr>
     <tr>
      <td class="text-success">true</td>
      <td >PROCEED</td>
      <th scope="row">PROCEED</th>
    </tr>
    <tr>
      <td class="text-danger">false</td>
      <td >PROCEED</td>
      <th scope="row">SKIP</th>
    </tr>
  </tbody>
</table>
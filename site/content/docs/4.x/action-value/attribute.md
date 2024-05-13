---
layout: docs
title: Attribute
description: Update the attribute of the element using below commands.
group: action-value
toc: true
---

{{<img action-attr.png>}}

<table class="table">
  <thead>
    <tr>
      <th scope="col">Attr::</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" width="120px">Attr::set::prop::value</th>
      <td>Now update value of attribute using attribute syntax.
        <ul>
          <li>Attr::set::disabled::false &lt;input disabled="<b>true</b>"> -> &lt;input disabled="<b>false</b>"></li>
          <li>Attr::set::target::_blank &lt;a> -> &lt;a <b>target="_blank"</b>> to open links in new tab</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row" width="120px">Attr::remove::prop</th>
      <td>Now remove attribute using attribute syntax.
        <ul>
          <li>Attr::remove::disabled &lt;input <b>disabled="true"</b>> -> &lt;input></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
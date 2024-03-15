---
layout: docs
title: Clipboard
description: Now you can copy any content from webpage using copy command and paste back any where within clipboard.
group: action-value
toc: true
---

{{<callout info>}}
#### Clipboard Permission Required

To enable the functionality, our extension requires clipboard permission for specific sites. Please grant this permission to ensure seamless operation. Additionally, ensure that the document is open and in focus during the copy command.
{{</callout>}}


### Copy to Clipboard

{{<img clipboard-copy-command.png>}}

<table class="table">
  <thead>
    <tr>
      <th scope="col"  width="210px">Clipboard::Copy::</th>
      <th scope="col">Description (Copy text from webpage) to clipboard</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Clipboard::Copy::[.]{6}</th>
      <td>
        <code>[.]</code> - Any Single Character <code>{6}</code> - no of characters 6
      </td>
    </tr>
    <tr>
      <th scope="row">Clipboard::Copy::[.]+</th>
      <td>
        <code>[.]</code> - Any Single Character <code>+</code> - all characters
      </td>
    </tr>
    <tr>
      <th scope="row">Clipboard::Copy::[a-z]{6}</th>
      <td>
        <code>[a-z]</code> - A character in the range: a-z
      </td>
    </tr>
    <tr>
      <th scope="row">Clipboard::Copy::[A-Z]{6}</th>
      <td>
        <code>[A-Z]</code> - A character in the range: A-Z
      </td>
    </tr>
    <tr>
      <th scope="row">Clipboard::Copy::[\d]{6}</th>
      <td>
        <code>[\d]</code> - A digit
      </td>
    </tr>
    <tr>
      <th scope="row">Clipboard::Copy::[\w]{6}</th>
      <td>
        <code>[\w]</code> - A word character
      </td>
    </tr>
  </tbody>
</table>

<!-- Ezoic - ezoic_longer_content - longer_content -->
<div id="ezoic-pub-ad-placeholder-107"> </div>
<!-- End Ezoic - ezoic_longer_content - longer_content -->

### Paste from Clipboard

{{<img clipboard-paste-command.png>}}

<table class="table">
  <thead>
    <tr>
      <th scope="col"  width="210px">Clipboard::Paste::</th>
      <th scope="col">Description (Paste text into field) from Clipboard</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Clipboard::Paste::</th>
      <td>
        Simply past the content copied using Clipboard::copy:: command or whatever there in clipboard
      </td>
    </tr>
    <tr>
      <th scope="row">Clipboard::Paste::at(5)</th>
      <td>
        The <code>at()</code> method takes an integer value and returns a new String consisting of the single UTF-16 code unit located at the specified offset. This method allows for positive and negative integers. Negative integers count back from the last string character.
        <hr/>
        <ul>
          <li>'The quick brown fox jumps over the lazy dog.'.at(5) -> <code>u</code></li>
          <li>'The quick brown fox jumps over the lazy dog.'.at(-4) -> <code>d</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Clipboard::Paste::charAt(4)</th>
      <td>
        The <code>charAt()</code> method of a String instance returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
        <hr/>
        <ul>
          <li>'The quick brown fox jumps over the lazy dog.'.at(4) -> <code>q</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Clipboard::Paste::concat("World")</th>
      <td>
        The <code>concat()</code> method concatenates the string arguments to the calling string and returns a new string.
        <hr/>
        <ul>
          <li>'Hello'.concat(' ', 'World') -> <code>Hello World</code></li>
          <li>'Hello'.concat(', ', 'World') -> <code>Hello, World</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Clipboard::Paste::match(/[A-Z]/g)</th>
      <td>
        The <code>match()</code> method retrieves the result of matching a string against a regular expression.
        <hr/>
        <ul>
          <li>'The quick brown fox jumps. It barked.'.match(/[A-Z]/g) -> <code>["T", "I"]</code></li>
          <li>'The quick brown fox jumps. It barked.'.match(/[A-Z]/g).join("") -> <code>TI</code></li>
          <li>'The quick brown fox jumps. It barked.'.match(/[A-Z]/g).join(",") -> <code>T,I</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Clipboard::Paste::replace("dog", "monkey")</th>
      <td>
        The <code>replace()</code> method returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.
        <hr/>
        <ul>
          <li>'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.replace("dog", "monkey") -> <code>The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?</code></li>
          <li>'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.replace(/Dog/i, "ferret") -> <code>The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Clipboard::Paste::replaceAll("dog", "monkey")</th>
      <td>
        The <code>replaceAll()</code> method returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.
        <hr/>
        <ul>
          <li>'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.replaceAll("dog", "monkey") -> <code>The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?</code></li>
          <li>'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.replaceAll(/Dog/i, "ferret") -> <code>The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Clipboard::Paste::slice(31)</th>
      <td>
        The <code>slice()</code> method extracts a section of a string and returns it as a new string, without modifying the original string.
        <hr/>
        <ul>
          <li>'The quick brown fox jumps over the lazy dog.'.slice(31) -> <code>the lazy dog.</code></li>
          <li>'The quick brown fox jumps over the lazy dog.'.slice(4, 19) -> <code>quick brown fox</code></li>
          <li>'The quick brown fox jumps over the lazy dog.'.slice(-4) -> <code>dog</code></li>
          <li>'The quick brown fox jumps over the lazy dog.'.slice(-9, -5) -> <code>lazy </code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Clipboard::Paste::split(" ")</th>
      <td>
        The <code>split()</code> method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
        <hr/>
        <ul>
          <li>'The quick brown fox jumps over the lazy dog.'.split(' ')[3] -> <code>fox</code></li>
          <li>'The quick brown fox jumps over the lazy dog.'.split('')[8] -> <code>k</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Clipboard::Paste::substring(1, 3)</th>
      <td>
        The <code>substring()</code> method returns the part of the string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.
        <hr/>
        <ul>
          <li>'Auto Clicker AutoFill'.substring(1,3) -> <code>to</code></li>
          <li>'Auto Clicker AutoFill'.substring(5) -> <code>Clicker AutoFill</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Clipboard::Paste::toLowerCase()</th>
      <td>
        The <code>toLowerCase()</code> method returns the calling string value converted to lower case.
        <hr/>
        <ul>
          <li>'Auto Clicker AutoFill'.toLowerCase() -> <code>auto clicker autofill</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Clipboard::Paste::toUpperCase()</th>
      <td>
        The <code>toUpperCase()</code> method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
        <hr/>
        <ul>
          <li>'Auto Clicker AutoFill'.toUpperCase() -> <code>AUTO CLICKER AUTOFILL</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Clipboard::Paste::trim()</th>
      <td>
        The <code>trim()</code> method removes whitespace from both ends of a string and returns a new string, without modifying the original string.
        To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().
         <hr/>
        <ul>
          <li>'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Auto Clicker AutoFill&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'.trim() -> <code>Auto Clicker AutoFill</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Clipboard::Paste::trimStart()</th>
      <td>
        The <code>trimStart()</code> method removes whitespace from the beginning of a string and returns a new string, without modifying the original string. trimLeft() is an alias of this method.
         <hr/>
        <ul>
          <li>'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Auto Clicker AutoFill&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'.trimStart() -> <code>Auto Clicker AutoFill&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Clipboard::Paste::trimEnd()</th>
      <td>
        The <code>trimEnd()</code> method removes whitespace from the end of a string and returns a new string, without modifying the original string. trimRight() is an alias of this method.
         <hr/>
        <ul>
          <li>'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Auto Clicker AutoFill&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'.trimEnd() -> <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Auto Clicker AutoFill</code></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

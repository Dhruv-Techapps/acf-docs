---
menu: docs
title:  "XPath"
tags: [xpath, configuration]
---
{:.bd-title}
# XPath

{:.bd-lead}
Its little tricky but believe me its not that hard to find.

{:.bd-callout .bd-callout-warning}
> Follow below steps to get XPath
> 1. Right click any button or link or whaterver you want to click in webpage and select Inspect.
> 2. It will open developer console and highlight that element under Elements Tab
> 3. Right click that element and select Copy > Copy XPath.
> 4. Thats it you have your XPath of that element now.

### <kbd>Examples</kbd>

{:.bd-example}
### `//div/a[1]`

```html
<div>
  <a>One</a> 👈 selected
  <a>Two</a>
</div>
```

{:.bd-example}
### `//div/a[last()]`

```html
<div>
  <a>First</a>
  <a>Middle</a>
  <a>Last</a> 👈 selected
</div>
```

{:.bd-example}
### `//div/a[last()-1]`

```html
<div>
  <a>First</a>
  <a>Middle</a> 👈 selected
  <a>Last</a>
</div>
```

{:.bd-example}
### `//div/a[position()>2]`

```html
<div>
  <a>First</a>
  <a>Second</a>
  <a>Third</a> 👈 selected
  <a>Forth</a> 👈 selected
</div>
```


{:.bd-example}
### `//a[@href]`

```html
<div>
  <a>First</a>
  <a>Second</a>
  <a href="#">Third</a> 👈 selected
  <a>Forth</a>
</div>
```

{:.bd-example}
### `//a[@href='google']`

```html
<div>
  <a>First</a>
  <a href="#">Second</a>
  <a href="google">Third</a> 👈 selected
  <a>Forth</a>
</div>
```

{:.bd-example}
### `//button[@id='1']`

```html
<div>
  <a>First</a>
  <button type="button" id="1">Click me</button> 👈 selected
  <a href="#">Second</a>
  <a href="dhruv-techapps.github.io">Third</a>
  <a>Forth</a>
</div>
```

{:.bd-example}
### `//a[@id<'3']`

```html
<div>
  <a id='1'>Primary</button> 👈 selected
  <a id='2'>Secondary<button> 👈 selected
  <a id='3'>Warning<button>
  <a id='4'>Me Too<button>
</div>
```

{:.bd-example}
### `//button[contains(@class,'me')]`

```html
<div>
  <button type='button' id='1'>Primary</button>
  <button class='me second'>Secondary<button> 👈 selected
  <button class='me warning'>Warning<button> 👈 selected
  <button class='me-too done'>Me Too<button> 👈 selected
</div>
```

{:.bd-example}
### `//button[contains(text(),'Me')]`

```html
<div>
  <button type='button' id='1'>Primary</button>
  <button class='me second'>Secondary<button>
  <button class='me warning'>Warning<button>
  <button class='me-too done'>Me Too<button> 👈 selected
</div>
```

{:.bd-example}
### `//*[substring(text(), 0, 3)>='50']`

```html
<div>
  <span class='bdage'>55 %</span> 👈 selected
  <span class='bdage'>50 %</span> 👈 selected
  <span class='bdage'>45 %</span>
  <span class='bdage'>43 %</span>
</div>
```

[Inbox me](dhruv.techapps@gmail.com) if you find difficult to find XPath or you have any better suggestion for me :)

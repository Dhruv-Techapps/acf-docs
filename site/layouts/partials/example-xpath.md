`//div/a[1]`
```html
<div>
  <a>One</a> 👈 selected
  <a>Two</a>
</div>
```

`//div/a[last()]`
```html
<div>
  <a>First</a>
  <a>Middle</a>
  <a>Last</a> 👈 selected
</div>
```

`//div/a[last()-1]`
```html
<div>
  <a>First</a>
  <a>Middle</a> 👈 selected
  <a>Last</a>
</div>
```

`//div/a[position()>2]`
```html
<div>
  <a>First</a>
  <a>Second</a>
  <a>Third</a> 👈 selected
  <a>Forth</a> 👈 selected
</div>
```


`//a[@href]`
```html
<div>
  <a>First</a>
  <a>Second</a>
  <a href="#">Third</a> 👈 selected
  <a>Forth</a>
</div>
```

`//a[@href='google']`
```html
<div>
  <a>First</a>
  <a href="#">Second</a>
  <a href="google">Third</a> 👈 selected
  <a>Forth</a>
</div>
```

`//button[@id='1']`
```html
<div>
  <a>First</a>
  <button type="button" id="1">Click me</button> 👈 selected
  <a href="#">Second</a>
  <a href="dhruv-techapps.github.io">Third</a>
  <a>Forth</a>
</div>
```

`//a[@id<'3']`
```html
<div>
  <a id='1'>Primary</button> 👈 selected
  <a id='2'>Secondary<button> 👈 selected
  <a id='3'>Warning<button>
  <a id='4'>Me Too<button>
</div>
```

`//button[contains(@class,'me')]`
```html
<div>
  <button type='button' id='1'>Primary</button>
  <button class='me second'>Secondary<button> 👈 selected
  <button class='me warning'>Warning<button> 👈 selected
  <button class='me-too done'>Me Too<button> 👈 selected
</div>
```

`//button[contains(text(),'Me')]`
```html
<div>
  <button type='button' id='1'>Primary</button>
  <button class='me second'>Secondary<button>
  <button class='me warning'>Warning<button>
  <button class='me-too done'>Me Too<button> 👈 selected
</div>
```

`//*[substring(text(), 0, 3)>='50']`
```html
<div>
  <span class='badge'>55 %</span> 👈 selected
  <span class='badge'>50 %</span> 👈 selected
  <span class='badge'>45 %</span>
  <span class='badge'>43 %</span>
</div>
```

Chat with us on
<a class="text-decoration-none" style="color:#7289da" href="{{ .Site.Params.discord }}" target="_blank" rel="noopener">
  {{ partial "icons/discord.svg" (dict "class" "navbar-nav-svg d-inline-block align-text-top" "width" "36" "height" "36") }}
</a> if you find difficult to find XPath or you have any better suggestion for me :)
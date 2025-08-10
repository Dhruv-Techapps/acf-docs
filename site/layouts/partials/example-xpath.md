#### Note
Chrome (Chromium) supports XPath 1.0. The examples below use XPath 1.0 syntax and show which elements are selected.

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

`//div/a[position() > 2]`
```html
<div>
  <a>First</a>
  <a>Second</a>
  <a>Third</a> 👈 selected
  <a>Fourth</a> 👈 selected
</div>
```

`//a[@href]` (attribute present)
```html
<div>
  <a>First</a>
  <a>Second</a>
  <a href="#">Third</a> 👈 selected
  <a>Fourth</a>
</div>
```

`//a[@href='google']` (attribute equals)
```html
<div>
  <a>First</a>
  <a href="#">Second</a>
  <a href="google">Third</a> 👈 selected
  <a>Fourth</a>
</div>
```

`//button[@id='1']` (match by id)
```html
<div>
  <a>First</a>
  <button type="button" id="1">Click me</button> 👈 selected
  <a href="#">Second</a>
  <a href="dhruv-techapps.github.io">Third</a>
  <a>Fourth</a>
</div>
```

`//a[@data-rank < 3]` (numeric comparison)
```html
<div>
  <a data-rank="1">Primary</a> 👈 selected
  <a data-rank="2">Secondary</a> 👈 selected
  <a data-rank="3">Warning</a>
  <a data-rank="4">Info</a>
</div>
```

`//button[contains(@class,'me')]` (substring match)
```html
<div>
  <button type="button" id="1">Primary</button>
  <button class="me second">Secondary</button> 👈 selected
  <button class="me warning">Warning</button> 👈 selected
  <button class="me-too done">Me Too</button> 👈 selected (substring match)
</div>
```

`//button[contains(concat(' ', normalize-space(@class), ' '), ' me ')]` (safe class match)
```html
<div>
  <button class="me second">Secondary</button> 👈 selected
  <button class="me-too done">Me Too</button>
</div>
```

`//button[contains(text(),'Me')]` (text contains)
```html
<div>
  <button type="button" id="1">Primary</button>
  <button class="me second">Secondary</button>
  <button class="me warning">Warning</button>
  <button class="me-too done">Me Too</button> 👈 selected
</div>
```

`//button[starts-with(normalize-space(.), 'Sign')]` (text starts-with)
```html
<div>
  <button>Sign in</button> 👈 selected
  <button>Signup</button> 👈 selected
  <button>Log out</button>
</div>
```

`//span[contains(@class,'badge')][number(translate(normalize-space(.),' %','')) >= 50]` (numeric text greater than or equal to 50)
```html
<div>
  <span class="badge">55 %</span> 👈 selected
  <span class="badge">50 %</span> 👈 selected
  <span class="badge">45 %</span>
  <span class="badge">43 %</span>
</div>
```

`//label[normalize-space(text())='Email']/following-sibling::input[1]` (following sibling)
```html
<div>
  <label>Email</label>
  <input type="email"> 👈 selected
  <input type="text">
</div>
```

`//input[@id='street']/parent::*` (parent)
```html
<div>
  <div class="field"> 👈 selected
    <input id="street" type="text" />
  </div>
</div>
```

`//button[@type='submit']/ancestor::form` (ancestor)
```html
<form> 👈 selected
  <button type="submit">Send</button>
</form>
```

`//li[@class='active']/preceding-sibling::li[1]` (preceding sibling)
```html
<ul>
  <li>One</li> 👈 selected
  <li class="active">Two</li>
  <li>Three</li>
</ul>
```

`//div//button` (descendant of div)
```html
<div>
  <section>
    <button>Ok</button> 👈 selected
  </section>
</div>
```

`//button[@type='submit'][contains(@class,'primary')][not(@disabled)]` (combined conditions)
```html
<div>
  <button type="submit" class="primary">Save</button> 👈 selected
  <button type="submit" class="primary" disabled>Save</button>
  <button class="primary">Not submit</button>
</div>
```

Chat with us on
<a class="text-decoration-none" style="color:#7289da" href="{{ .Site.Params.discord }}" target="_blank" rel="noopener">
  {{ partial "icons/discord.svg" (dict "class" "navbar-nav-svg d-inline-block align-text-top" "width" "36" "height" "36") }}
</a> if you find it difficult to craft an XPath or have suggestions.
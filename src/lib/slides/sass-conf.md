### CSS Modules:
# From Extension to Composition 

#### —

by @glenmaddern

---

<meta bg x-gif src="https://media.giphy.com/media/m7O3wefEGWnp6/giphy.gif" n-times="1" align="bottom"></meta>

# Australia!

---

<meta slide="excellent"></meta>

#### First up
# Some context

---

<meta slide="white"></meta>

![](https://raw.githubusercontent.com/css-modules/logos/master/css-modules-logo.png)

---

<meta slide="excellent"></meta>

# <span className={styles.emoji}>💖</span>

---

<meta slide="dramatic"></meta>

## Today

* The problem with @extend
* How CSS Modules works
* Composition & Modular Style

---

<meta slide="dramatic"></meta>

#### Part 1:

# The problem 
#### with
# @extend

---

> This is one of the most useful features of Sass. Using @extend lets you share a set of CSS properties from one selector to another. It helps keep your Sass very DRY. <br/>
  ... <br/>
  The magic happens with the generated CSS, and this helps you avoid having to write multiple class names on HTML elements.
  
#### sass-lang.com/guide

---

#### "What Nobody Told You About Sass’s @extend"
#### "Why You Should Avoid Sass @extend"
#### "Extending In Sass Without Creating A Mess"
#### "Sass doesn't create bad code. Bad coders do."

---

<meta slide="excellent"></meta>

## When @extend
# is <span className={styles.emoji}>👌</span>

---

<meta slide="examples"></meta>

<div className={styles.demo}>
  <button className={styles.examples.normal}>Submit</button>
  <button className={styles.examples.invalid}>Delete!</button>
</div>

<div data-bullet></div>

```css
.SubmitButton { /* COMMON STYLES */ }
.SubmitButton--normal { /* BLUE COLOURS */ }              ⏐
.SubmitButton--danger { /* RED COLOURS */ }
```

```html
<button class='SubmitButton SubmitButton--normal'>
  Submit
</button>

<button class='SubmitButton SubmitButton--danger'>
  Delete!
</button>
```

---

<meta slide="examples"></meta>

<div className={styles.demo}>
  <button className={styles.examples.normal}>Submit</button>
  <button className={styles.examples.invalid}>Delete!</button>
</div>


```css
.SubmitButton { /* COMMON STYLES */ }
.SubmitButton--normal { /* BLUE COLOURS */ }              ⏐
.SubmitButton--danger { /* RED COLOURS */ }
```

<div data-bullet></div>

```html
<button class='SubmitButton SubmitButton--normal'>
  Submit
</button>

<button class='SubmitButton SubmitButton--danger'>
  Delete!
</button>
```

---

<meta slide="examples"></meta>

<div className={styles.demo}>
  <button className={styles.examples.normal}>Submit</button>
  <button className={styles.examples.invalid}>Delete!</button>
</div>

```css
.SubmitButton { /* COMMON STYLES */ }
.SubmitButton--normal { /* BLUE COLOURS */ }              ⏐
.SubmitButton--danger { /* RED COLOURS */ }
```

```html
<button class='SubmitButton SubmitButton--normal'>
  Submit
</button>

<button class='SubmitButton SubmitButton--danger'>
  Delete!
</button>
```

---

<meta slide="examples"></meta>

<div className={styles.demo}>
  <button className={styles.examples.normalBroken}>Submit</button>
  <button className={styles.examples.invalidBroken}>Delete!</button>
</div>

```css
.SubmitButton { /* COMMON STYLES */ }
.SubmitButton--normal { /* BLUE COLOURS */ }              ⏐
.SubmitButton--danger { /* RED COLOURS */ }
```

```html
<button class='SubmitButton--normal'>
  Submit
</button>

<button class='SubmitButton--danger'>
  Delete!
</button>
```

---

<meta slide="white"></meta>

# <span className={styles.emoji}>😡</span>

---

<meta slide="white"></meta>


## &lt;rant>
### The number of mistakes a new developer makes when learning to use a system is a **value judgement of the system**, not the developer 

---

<meta slide="white"></meta>

## "Sass doesn't create bad code. Bad coders do."

# <span className={styles.emoji}>🚮</span>
---

<meta slide="white"></meta>

## "Crafting beautiful output CSS with Sass"

# <span className={styles.emoji}>👬👫👭</span>

---

<meta slide="white"></meta>

## &lt;/rant>

#### and apologies for Roy for using his blog post as an example

---

<meta slide="examples"></meta>

<div className={styles.demo}>
  <button className={styles.examples.normalBroken}>Submit</button>
  <button className={styles.examples.invalidBroken}>Delete!</button>
</div>

```css
.SubmitButton { /* COMMON STYLES */ }
.SubmitButton--normal { /* BLUE COLOURS */ }              ⏐
.SubmitButton--danger { /* RED COLOURS */ }
```

```html
<button class='SubmitButton--normal'> Submit </button>
<button class='SubmitButton--danger'> Delete! </button>
```

---

<meta slide="examples"></meta>

<div className={styles.demo}>
  <button className={styles.examples.normal}>Submit</button>
  <button className={styles.examples.invalid}>Delete!</button>
</div>

```css
button { /* COMMON STYLES */ }
.SubmitButton--normal { /* BLUE COLOURS */ }              ⏐
.SubmitButton--danger { /* RED COLOURS */ }
```

```html
<button class='SubmitButton--normal'> Submit </button>
<button class='SubmitButton--danger'> Delete! </button>
```

---
<meta bg x-gif src="http://media0.giphy.com/media/CMvLdjfjQnQAg/giphy.gif"></meta>

---

<meta slide="examples"></meta>

<div className={styles.demo}>
  <button className={styles.examples.normal}>Submit</button>
  <button className={styles.examples.invalid}>Delete!</button>
</div>

```scss
.SubmitButton { /* COMMON STYLES */ }                     ⏐
.SubmitButton--normal { 
  @extend .SubmitButton;
  /* BLUE COLOURS */
}
.SubmitButton--danger { 
  @extend .SubmitButton;
  /* RED COLOURS */
}
```

```html
<button class='SubmitButton--normal'> Submit </button>
<button class='SubmitButton--danger'> Delete! </button>
```

---


<meta slide="examples"></meta>

<div className={styles.demo}>
  <button className={styles.examples.normal}>Submit</button>
  <button className={styles.examples.invalid}>Delete!</button>
</div>

```scss
.SubmitButton, .SubmitButton--normal, .SubmitButton--danger {
  /* COMMON STYLES */
}                                                         ⏐
.SubmitButton--normal {
  /* BLUE COLOURS */
}
.SubmitButton--danger {
  /* RED COLOURS */
}
```

```html
<button class='SubmitButton--normal'> Submit </button>
<button class='SubmitButton--danger'> Delete! </button>
```

---

<meta slide="excellent"></meta>

### Problem #1

## @extend — what are you?

---

### Attempt 1 <br/>**"is a"**

<div data-bullet></div>

```scss
.bacon-pancake { 
  @extend .normal-pancake;
  /* ... */
}
```

A bacon pancake is a normal pancake. <br/> As well as other things (i.e. bacon)

---

### Attempt 1 <br/>**"is a"**

```scss
.bacon-pancake { 
  @extend .normal-pancake;
  /* ... */
}
```

<div data-bullet></div>

A bacon pancake is a normal pancake. <br/> As well as other things (i.e. bacon)

---

### Attempt 1 <br/>**"is a"**

```scss
.bacon-pancake { 
  @extend .normal-pancake;
  /* ... */
}
```

A bacon pancake ***is a*** normal pancake. <br/> As well as other things (i.e. bacon)

---
<meta bg x-gif src="https://media.giphy.com/media/10rMO9xsxzy5H2/giphy.gif"></meta>

---

<div className={styles.demo}>
  <button className={styles.examples.cta}>Sign up!</button>
</div>

```scss
.Button--CallToAction {
  @extend .Button;
  color: fuchsia;
  &:hover {
    box-shadow: 0 0px 40px 10px currentColor;
  }
}
```

---

<div className={styles.demo}>
  <button className={styles.examples.cta}>Sign up!</button>
</div>

```scss
.Shadow--Obnoxious { 
  box-shadow: 0 0px 40px 10px currentColor;
}
.Button--CallToAction {
  @extend .Button;
  color: fuchsia;
  &:hover {
    @extend .Shadow--Obnoxious;
  }
}
```

---

```scss
.Button--CallToAction { 
  @extend .Button;
  &:hover { @extend .Shadow--Obnoxious; }
}
```

<div data-bullet></div>

a CallToAction button ***is a*** Button <br/> & ***is a*** obnoxiously-shadowed-thing when hovered

---

```scss
.Button--CallToAction { 
  @extend .Button;
  &:hover { @extend .Shadow--Obnoxious; }
}
```

a CallToAction button ***is a*** Button <br/> & ***is a*** obnoxiously-shadowed-thing when hovered

---

```scss
.Button--CallToAction { 
  @extend .Button;
  &:hover { @extend .Shadow--Obnoxious; }
  .Modal & { @extend .Layout--FullWidth; }
}
```

a CallToAction button ***is a*** Button <br/> & ***is a*** obnoxiously-shadowed-thing when hovered <br/> & ***is a*** full-width thing when inside a Modal

---

```scss
.Button--CallToAction { 
  @extend .Button;
  &:hover { @extend .Shadow--Obnoxious; }
  .Modal & { @extend .Layout--FullWidth; }
  > * { @extend .Type--Uppercase; }
}
```

a CallToAction button ***is a*** Button <br/> & ***is a*** obnoxiously-shadowed-thing when hovered <br/> & ***is a*** full-width thing when inside a Modal <br/> & direct descendants ***are an*** uppercase thing ... 😤 

---

<meta bg x-gif src="/assets/images/yeahnah.gif" ping-pong></meta>

---

<meta slide="examples"></meta>

```scss
.Button--CallToAction { 
  @extend .Button;
  &:hover { @extend .Shadow--Obnoxious; }
  .Modal & { @extend .Layout--FullWidth; }
  > * { @extend .Type--Uppercase; }
}
```

#### &nbsp;

<div data-bullet></div>

```scss
.Button--CallToAction { @extend .Button; }
.Button--CallToAction:hover { @extend .Shadow--Obnoxious; }
.Modal .Button--CallToAction { @extend .Layout--FullWidth; }
.Button--CallToAction > * { @extend .Type--Uppercase; }
```
---

<meta slide="examples"></meta>

```scss
.Button--CallToAction { 
  @extend .Button;
  &:hover { @extend .Shadow--Obnoxious; }
  .Modal & { @extend .Layout--FullWidth; }
  > * { @extend .Type--Uppercase; }
}
```

#### is equivalent to:

```scss
.Button--CallToAction { @extend .Button; }
.Button--CallToAction:hover { @extend .Shadow--Obnoxious; }
.Modal .Button--CallToAction { @extend .Layout--FullWidth; }
.Button--CallToAction > * { @extend .Type--Uppercase; }
```
---

### Attempt 2 <br/>**"duplicate & replace"**

<div data-bullet></div>

```scss
.some .complex .selector { 
  @extend .target;
  /* ... */
}
```

* Duplicate all rules containing `.target`
* Replace `.target` with `.some .complex .selector` in the new rules

---

### Attempt 2 <br/>**"duplicate & replace"**

```scss
.some .complex .selector { 
  @extend .target;
  /* ... */
}
```

<div data-bullet></div>

* Duplicate all rules containing `.target`
* Replace `.target` with `.some .complex .selector` in the new rules

---

### Attempt 2 <br/>**"duplicate & replace"**

```scss
.some .complex .selector { 
  @extend .target;
  /* ... */
}
```

* Duplicate all rules containing `.target`
* Replace `.target` with `.some .complex .selector` in the new rules

---

## Almost!

---

<meta slide="examples"></meta>

```scss
.ancestor-1 .foo { color: green; }
.ancestor-2 .bar { @extend .foo; }
```

#### &nbsp;

<div data-bullet></div>

```scss
.ancestor-1 .foo,
.ancestor-1 .ancestor-2 .bar,
.ancestor-2 .ancestor-1 .bar {
  color: green;
}
```
---

<meta slide="examples"></meta>

```scss
.ancestor-1 .foo { color: green; }
.ancestor-2 .bar { @extend .foo; }
```

#### compiles to

```scss
.ancestor-1 .foo,
.ancestor-1 .ancestor-2 .bar,
.ancestor-2 .ancestor-1 .bar {
  color: green;
}
```
---

<meta bg="https://upload.wikimedia.org/wikipedia/commons/e/e8/Hippo_Indigestion.jpg" align="top"></meta>

### Problem #2

## hungry hungry @extend

---

<meta slide="examples"></meta>

```scss
.one { }
.one:hover { }
.context .one { }
.one > * { }
                                                ⏐
                                                ⏐
```

---

<meta slide="examples"></meta>

```scss
.one { }
.one:hover { }
.context .one { }
.one > * { }
.two { @extend .one }
                                                ⏐
```

---

<meta slide="examples"></meta>

```scss
.one, .two { }
.one:hover, .two:hover { }
.context .one, .context .two { }
.one > *, .two > * { }
.two { }
                                                ⏐
```
---

<meta slide="examples"></meta>

```scss
.one, .two { }
.one:hover, .two:hover { }
.context .one, .context .two { }
.one > *, .two > * { }
.two { }
.three { @extend .one }                         ⏐
```
---

<meta slide="examples"></meta>

```scss
.one, .two, .three { }
.one:hover, .two:hover, .three:hover { }
.context .one, .context .two, .context .three { }
.one > *, .two > *, .three > * { }
.two { }
.three { }
```

---

<meta slide="white"></meta>

![](https://dl.dropboxusercontent.com/spa/a9i2yebxv7pg2ex/-hkopc7g.png)

---

<meta bg x-gif src="http://i.imgur.com/KKrYqya.gif" n-times="1" align="bottom"></meta>

# Runaway complexity!

---

<meta slide="white"></meta>

## &lt;rant>

---

<meta bg x-gif src="http://i.imgur.com/0IrfsfV.gif" n-times="1"></meta>

---

<meta bg x-gif src="http://i.imgur.com/U5hPfa2.gif" speed="1.5"></meta>

---

<meta slide="white"></meta>

## &lt;/rant>

---

<meta slide="excellent"></meta>

### Problem #3

## Limitations

---

## Media queries?

```css
@media (min-width: 1px) {
  .one { @extend .two; }
}
```

---

# <span className={styles.emoji}>🚫</span>

---

#### Despite all the edge-cases
## @extend is a good idea!

---

## Happy @extend

* Only use the "extendee" in one place
* Use `%placeholder`, or not
* That's it!

---

<meta slide="examples"></meta>

```css
/* typography.scss */
%ui-type-light { font-weight: 300; }
%ui-type-normal { font-weight: 400; }

%ui-type-16pt { font-size: 1rem; }
%ui-type-18pt { font-size: 1.125rem; }

%ui-type-lh16 { line-height: 1.6; }
```

```css
/* flex.scss */
%ui-flex { display: flex; }
%ui-flex-end { justify-content: flex-end; }
%ui-flex-align-center { align-items: center; }
```

---

<meta slide="megacode"></meta>

```scss
@mixin ui($attr, $value: "") {
  @extend %ui-#{$attr};
  $string: $value;
  $continue: true;
  @while $continue {
    $next-space: str-index($string, ' ');
    @if type-of($next-space) == number {
      $next-word: str-slice($string, 1, $next-space - 1);
      $string: str-slice($string, $next-space + 1);
    }
    @else {
      $next-word: $string;
      $continue: false;
    }
    @extend %ui-#{$attr}-#{$next-word};
  }
}
```

---

<meta slide="examples"></meta>

```scss
.ComponentName {
  @include ui(type, "20pt bold lh14");
  @include ui(flex, "vertical end align-center");
  @include ui(layout, "90vh 100vw");
}
```

#### ⏐

<div data-bullet></div>

```scss
.ComponentName {
  @extend %ui-type-20pt, %ui-type-bold, %ui-type-lh14;
  @extend %ui-flex, %ui-flex-vertical, 
          %ui-flex-end, %ui-flex-align-center;
  @extend %ui-layout, %ui-layout-90vh, %ui-layout-100vw;
}
```

---
<meta slide="examples"></meta>

```scss
.ComponentName {
  @include ui(type, "20pt bold lh14");
  @include ui(flex, "vertical end align-center");
  @include ui(layout, "90vh 100vw");
}
```

#### compiles to

```scss
.ComponentName {
  @extend %ui-type-20pt, %ui-type-bold, %ui-type-lh14;
  @extend %ui-flex, %ui-flex-vertical, 
          %ui-flex-end, %ui-flex-align-center;
  @extend %ui-layout, %ui-layout-90vh, %ui-layout-100vw;
}
```

---

<meta slide="megacode"></meta>

```css
.type-18pt, a.btn-on-image, button.btn-on-image, .input-calculator, .input-contact, 
  .AccountTransactionHistory-Notice h2, .breakpoint-hand .Hero-Copy > p, 
  .Long-Form-Copy > h4, .PaymentModal-Account > h3, .DashboardCard-welcome p, 
  .DashboardCard-swipe p, .DashboardCard-touch p, .DashboardCard-hedged p {
  font-size: 1.125rem;
}

.type-20pt, .AccountTransactionHistory > h1, .Drawer-Profile-Name-fullname, .Drawer-Links,
  .Article h3, .AppHeader-Logo > h1, .Hero-Copy > p, .breakpoint-hand 
  .login-screen__header h2, .Marketing-Section h3, .modal h3, .Story-Quote blockquote p, 
  .UserProfile-Header > h2 {
  font-size: 1.25rem; 
}
```

---

# <span className={styles.emoji}>👍</span>

---
<meta slide="dramatic"></meta>

#### Part 2:

# CSS Modules 
### What happens when your markup is *dynamic?*

---

# HTML?

---

<meta slide="twolist"></meta>

## Dynamic Markup

* Jade
* Dust
* ERB
* HAML
* Slim
* Mustache
* Angular
* Handlebars (JQuery)
* HTMLBars (Ember)
* React   

---

<meta slide="white"></meta>

![](http://red-badger.com/blog/wp-content/uploads/2015/04/react-logo-1000-transparent.png)

---

### **@**Vjeux's 7 Problems <small className={styles.small}>(of CSS)</small>
* Global Namespaces
* Dependencies
* Dead Code Elimination
* Minification
* Sharing Constants
* Non-deterministic Resolution
* Isolation

---

> It turns out that if you **write your styles in JS**, a large class of really hard problems with CSS just disappear instantly.

https://speakerdeck.com/vjeux/react-css-in-js

#### February 4, 2009

---

<meta bg x-gif src="http://stream1.gifsoup.com/webroot/animatedgifs/483186_o.gif" n-times="0.79" align="bottom"></meta>

## The CSS Community

---

## CSS in JS

* Inline styles
* React Style
* jsxstyle
* Radium
* jss

---

> [*We wanted to*] help you and your team **maintain as much of your current knowledge** of CSS and your product, but become vastly more comfortable and more productive.

http://glenmaddern.com/articles/css-modules

#### August 19, 2015
---

## Components

---

<meta slide="white-sideways"></meta>

```
styles/
    index.scss
    _variables.scss
    _colors.scss
    ...
    components/
        submit-button.scss
        nav-bar.scss
        signup-form.scss
        ...
```

```
scripts/
    app.js
    utils.js
    data-access.js
    ...
    components/
        submit-button.js
        nav-bar.js
        signup-form.js
        ...
```

---

<meta slide="white-sideways"></meta>

```
styles/
    index.scss
    _variables.scss
    _colors.scss
    ...
scripts/
    app.js
    utils.js
    data-access.js
    ...
⏐
```

```
components/
    submit-button/
        submit-button.js
        submit-button.scss
    nav-bar/
        nav-bar.js
        nav-bar.scss
    signup-form/
        signup-form.js
        signup-form.scss
    ...
```

---

```js
import styles from "./signup-form.scss"
```

<div data-bullet></div>

### What is `styles`?

---

```js
import styles from "./signup-form.scss"
```

### What is `styles`?

---

<meta slide="examples"></meta>

```css
/* CSS */
.normal {
  /* styles here... */
}
```

<div data-bullet></div>

```css
/* ICSS */
:export {
  normal: normal_f34f7fa0;
}
.normal_f34f7fa0 {
  /* styles unchanged... */
}
```

```js
import styles from './submit-button.css';
// { normal: "normal_f34f7fa0" }
```

---

<meta slide="examples"></meta>

```css
/* CSS */
.normal {
  /* styles here... */
}
```

```css
/* ICSS */
:export {
  normal: normal_f34f7fa0;
}
.normal_f34f7fa0 {
  /* styles unchanged... */
}
```
<div data-bullet></div>

```js
import styles from './submit-button.css';
// { normal: "normal_f34f7fa0" }
```

---

<meta slide="examples"></meta>

```css
/* CSS */
.normal {
  /* styles here... */
}
```

```css
/* ICSS */
:export {
  normal: normal_f34f7fa0;
}
.normal_f34f7fa0 {
  /* styles unchanged... */
}
```

```js
import styles from './submit-button.css';
// { normal: "normal_f34f7fa0" }
```
---
<meta slide="examples"></meta>

```css
/* components/submit-button.css */
.normal_f34f7fa0 {
  /* styles here... */
}
```

```js
/* components/submit-button.jsx */
import styles from './submit-button.css';

return <button className={styles.normal}>Submit</button>
```

```html
<!-- Renders this HTML -->
<button class="normal_f34f7fa0">Submit</button>
```


---
<meta slide="examples"></meta>

```css
/* components/submit-button.css */
.components_submit_button__normal {
  /* styles here... */
}
```

```js
/* components/submit-button.jsx */
import styles from './submit-button.css';

return <button className={styles.normal}>Submit</button>
```

```html
<!-- Renders this HTML -->
<button class="components_submit_button__normal">Submit</button>
```
---
<meta slide="examples"></meta>

```css
/* components/submit-button.css */
.normal\(components\/submit\/button.css\:43\) {
  /* styles here... */
}
```

```js
/* components/submit-button.jsx */
import styles from './submit-button.css';

return <button className={styles.normal}>Submit</button>
```

```html
<!-- Renders this HTML -->
<button class="normal(components/submit/button.css:43)">Submit</button>
```

---
<meta slide="examples"></meta>

```css
/* components/submit-button.css */
.f34f7fa0 {
  /* styles here... */
}
```

```js
/* components/submit-button.jsx */
import styles from './submit-button.css';

return <button className={styles.normal}>Submit</button>
```

```html
<!-- Renders this HTML -->
<button class="f34f7fa0">Submit</button>
```
---
<meta slide="examples"></meta>

```css
/* components/submit-button.css */
.💖 {
  /* styles here... */
}
```

```js
/* components/submit-button.jsx */
import styles from './submit-button.css';

return <button className={styles.normal}>Submit</button>
```

```html
<!-- Renders this HTML -->
<button class="💖">Submit</button>
```

---

<meta slide="dramatic"></meta>

![](https://dl.dropboxusercontent.com/spa/a9i2yebxv7pg2ex/in3l8l9l.png)

---

<meta slide="dramatic"></meta>

#### Part 3:

# Composition
#### &
# Modular Style

---
<meta slide="dramatic"></meta>

## Why only export one class?

---

# Composition

---

<meta slide="examples"></meta>

<div className={styles.demo}>
  <button className={styles.examples.normal}>Submit</button>
  <button className={styles.examples.invalid}>Delete!</button>
</div>

```html
<button class="SubmitButton--Normal">Submit</button>     ⏐
<button class="SubmitButton--Danger">Delete!</button>
```

<div data-bullet></div>

#### vs

```html
<button className={styles.normal}>Submit</button>
<button className={styles.danger}>Delete!</button>
```

---

<meta slide="examples"></meta>

<div className={styles.demo}>
  <button className={styles.examples.normal}>Submit</button>
  <button className={styles.examples.invalid}>Delete!</button>
</div>

```html
<button class="SubmitButton--Normal">Submit</button>     ⏐
<button class="SubmitButton--Danger">Delete!</button>
```

#### vs

```html
<button className={styles.normal}>Submit</button>
<button className={styles.danger}>Delete!</button>
```

---

<meta slide="white-sideways"></meta>

```css
                          ⏐
.SubmitButton {
  /* COMMON STYLES */
}
.SubmitButton--normal {
  @extend .SubmitButton;
  /* BLUE */
}
.SubmitButton--danger {
  @extend .SubmitButton;
  /* RED */
}
​```
​
<div data-bullet></div>

```css

```
------

<meta slide="white-sideways"></meta>

```css
.SubmitButton {
  /* COMMON STYLES */
}
.SubmitButton--normal {
  @extend .SubmitButton;
  /* BLUE */
}
.SubmitButton--danger {
  @extend .SubmitButton;
  /* RED */
}
​```

```css
.base {
  /* COMMON STYLES */
}
.normal {
  composes: base;
  /* BLUE */
}
.danger {
  composes: base;
  /* RED */
}
                          ⏐
```

---

<meta slide="white"></meta>

```css


⏐

```

```css
                                            ⏐
                                     
.base { }
.normal { composes: base; }
.danger { composes: base; }
```

---

<meta slide="white"></meta>

```css


⏐

```

```css


.base_81f12d56 { }
.normal_f34f7fa0 { composes: base_81f12d56; }
.danger_b7d2ad6f { composes: base_81f12d56; }
```

---
<meta slide="examples"></meta>

```css
:export {
  base: base_81f12d56;
  normal: normal_f34f7fa0;
  danger: danger_b7d2ad6f;
}

.base_81f12d56 { }
.normal_f34f7fa0 { composes: base_81f12d56; }
.danger_b7d2ad6f { composes: base_81f12d56; }
```

---

<meta slide="examples"></meta>

```css
:export {
  base: base_81f12d56;
  normal: normal_f34f7fa0 base_81f12d56;
  danger: danger_b7d2ad6f base_81f12d56;
}
                                            ⏐
.base_81f12d56 { }
.normal_f34f7fa0 { }
.danger_b7d2ad6f { }
```

---

<meta slide="examples"></meta>

```js
/* components/submit-button.jsx */
import styles from './submit-button.css';

return <button className={styles.danger}>Delete!</button>
```

<div data-bullet></div>

```html
<!-- Renders this HTML -->
<button class="base_81f12d56 danger_b7d2ad6f">Delete!</button>
```

---

<meta slide="examples"></meta>

```js
/* components/submit-button.jsx */
import styles from './submit-button.css';

return <button className={styles.danger}>Delete!</button>
```

```html
<!-- Renders this HTML -->
<button class="base_81f12d56 danger_b7d2ad6f">Delete!</button>
```

---

### Break the
## 1-to-1 mapping
### between entities and classes

---

<meta slide="examples"></meta>

```css
/* colors.css */
.blue {
  color: hsl(210, 61%, 31%);
}
.light-blue-bg {
  background: hsla(210,61%,51%,0.1);
}
```

```css
/* submit-button.css */
.base {
  /* COMMON STYLES */
}
.normal {
  composes: base;
  composes: blue light-blue-bg from "./colors.css";
}
```

---
<meta slide="examples"></meta>

```css
.blue_c22950a8 {
  color: hsl(210, 61%, 31%);
}
.light-blue-bg_ea7f0091 {
  background: hsla(210,61%,51%,0.1);
}
.base_81f12d56 { /* COMMON STYLES */ }
.normal_f34f7fa0 {}
```

```html
<!-- Renders this HTML -->
<button class="base_81f12d56
               blue_c22950a8 
               light-blue-bg_ea7f0091
               normal_f34f7fa0">
  Submit
</button>
```

---

<meta slide="examples"></meta>

```sh
styles/
    shared/
        colors.css
        typography.css
        layout.css
        borders.css
        dividers.css
        sizes.css
        ...
    components/
        submit-button.css
        nav-bar.css
        signup-form.css
        ...
```

---

## Single Purpose Files
#### full of
## Single Purpose Classes

---

<meta slide="examples"></meta>

```css
.article {
  composes: flex vertical centered from "./layout.css";
}

.masthead {
  composes: serif bold 48pt centered from "./typography.css";
  composes: m1-bottom p1-left p1-right from "./layout.css";
}
```

```html
<article class="flex_e17427aa vertical_a17d1205 centered_86687352">
  <div class="serif_85db3038 bold_f845c6a12 48pt_bb1f8d2d
              centered_d0c84 m1-bottom_8fe3
              p1-left_0c7b6e p1-right_6cd78">
    Content...
  </div>
</article>
```
---

<meta slide="examples"></meta>

```css
.article {
  composes: flex vertical centered from "./layout.css";
}

.masthead {
  composes: serif bold 48pt centered from "./typography.css";
  composes: m1-bottom p1-left p1-right from "./layout.css";
}
```

```html
<article class="${styles.article}">
  <div class="${styles.masthead}">
    Content...
  </div>
</article>
```

<div data-bullet></div>

```
<article class="flex_e17427aa vertical_a17d1205 centered_86687352">
```

---

## One name in your "markup"
#### can refer to
## Styles from all over

---

## The dream of @extend
# is alive

---

<meta slide="dramatic"></meta>

## Modular Style?

---

<meta slide="dramatic"></meta>

## Flexibility

---

<meta slide="dramatic-image"></meta>

## Atomic Design

![](https://d262ilb51hltx0.cloudfront.net/max/800/1*j1P0pjQtl36QJavv8lHdyw.png)

#### Brad Frost, 2013

---

<meta slide="dramatic-image"></meta>

## Atomic Design

![](/assets/images/components-not-atoms.png)

#### Brad Frost, 2013

---

<meta slide="dramatic"></meta>

## Modular Style

#### =

## Composable Classes

---

<meta slide="dramatic"></meta>

## Future work

* Reusable components w/ CSS on NPM
* Non-JS ecosystems!!!

---

## <span className={styles.emoji}>😎</span> CSS Modules <span className={styles.emoji}>😎</span>

#### github.com/orgs/css-modules/people

* Mark Dalgleish **@markdalgleish**
* Tobias Koppers **@sokra**
* Josh Joshnston **@joshwnj**
* Josh Gillies **@joshgillies**
* Alexey Litvinov **@sullenor**

---

<meta slide="left"></meta>

## Thanks!

#### —

* glenmaddern.com/slides/from-extension-to-composition
* github.com/css-modules/css-modules
* glenmaddern.com/articles/css-modules

#### —

### **@glenmaddern**

---

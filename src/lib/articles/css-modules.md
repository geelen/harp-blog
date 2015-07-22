---
title: "CSS Modules"
strap: "Welcome to the Future"
date: "2015-07-18"
---

If you wanted to identify an inflection point in the recent development of CSS thinking, a watershed moment that set a bunch of different minds spiralling off in their own directions like a high-energy particle collision, you'd probably pick Christopher Chedeau's "CSS in JS" talk from NationJS in November, 2014. [React Style](https://github.com/js-next/react-style), [jsxstyle](https://github.com/petehunt/jsxstyle) and [Radium](https://github.com/FormidableLabs/radium) are three of the newest, cleverest, and most viable approaches to styling in React and all reference it *in their project Readme*. If invention is a case of exploring the adjacent possible, then Christopher is responsible for making a lot of the possible more adjacent.

There's one slide in particular from that talk that project authors have taken as a yardstick from then on:

![Problems with CSS at Scale slide](https://speakerd.s3.amazonaws.com/presentations/5ee70e00669c0132f0e02aa977d5e724/slide_1.jpg?1418657132)

These are all legitimate problems that affect most large CSS codebases in one way or another. Christopher points out that these all have good solutions if you move your styling to JavaScript, which is true but introduces its own complexities and idiosyncrasies. Just look at the range of approaches to handling `:hover` states among the projects I referenced earlier, something that has been solved in CSS for a *long* time.

Me, and the [other authors](https://github.com/orgs/css-modules/people) of CSS Modules felt that we could attack the problems head-on, and keep everything we liked about CSS and learning from (read: stealing) the benefits that the styles-in-JS community were bragging about. So, while we are bullish about our approach and firmly defend the virtues of CSS, we do owe a debt of gratitude to those folks pushing the boundaries in the other direction. Thanks, friends!

Here's what we propose:

![](http://31.media.tumblr.com/tumblr_lf80nsGxUk1qe0eclo1_r3_500.gif)
http://iwdrm.tumblr.com/post/2831236814

## Step 1. Local by default.

In CSS Modules, each file is compiled separately so you can use simple class selectors with generic names—you don't need to worry about polluting the global scope. Let's say we were building a simple submit button with the following 4 states.

[normal button] [error button] [ready button] [in-progress button]

In BEM, we might use classnames like this:

```css
/* components/submit-button.css */
.Button { /* all styles for Normal */ }
.Button--invalid { /* overrides for Error */ }
.Button--ready { /* overrides for Ready */ }
.Button--in-progress { /* overrides for In Progress */
```

This is pretty good, but `Button` is still maybe too generic. Maybe it should be `SubmitButton` just to be safe...

In CSS Modules, don't break step, use whatever names make the most sense:

```css
/* components/submit-button.css */
.normal { /* all styles for Normal */ }
.invalid { /* all styles for Error */ }
.ready { /* all styles for Ready */ }
.inProgress { /* all styles for In Progress */
```

A couple of things are different. First, we don't use the word *Button* anywhere. Why would we? This is *submit-button.css*. Second, we're not "overriding" styles, each class has the full set for that variant (more on that in section 2). Third, we used camelCase for `.inProgress`. That's because these classes become keys of a 

```js
/* components/submit-button.js */
import styles from './submit-button.css';

buttonElem.outerHTML = `<button class=${styles.normal}>`
```

Fleshing this idea out a little more, here's what it would look like as a React component that can determine which of the states to display:

```jsx
/* components/submit-button.jsx */
import styles from './submit-button.css';

export default class SubmitButton extends Component {
  render() {
    let className, text
    if (this.state.submitted) {
      className = styles.inProgress
      text = "Working..."
    } else if (this.props.form.valid) {
      className = styles.ready
      text = "Submit"
    } else if (this.props.form.invalid) {
      className = styles.invalid
      text = "Error"
    } else {
      className = styles.normal
      text = "Submit"
    }
	  return <button className={className}>{text}</button>
}
```

The actual classnames are automatically generated and guaranteed to be unique. CSS Modules is taking care of all that for you, and compiling the files to a format called Interoperable CSS ([read my blog post about that](interoperable-css)), which is how CSS and JS can communicate. So, when you run your app, you'll see something like:

```
<button class="components_submit_button__normal__abc5436">Submit</button>
```

That means it's working!

## Step 2. Composition is everything

Earlier I mentioned that each class should contain *all* the styles for the button in each different state, in contrast to BEM where it assumes you'd have more than one: `<button class="Button Button--valid">`. But wait, how do you represent *shared* styles between all the states? The answer is probably CSS Modules' most potent weapon, **composition**:

```css
.common {
  /* all the common styles you want */
}
.normal {
  composes: common;
  /* anything that only applies to Normal */
}
.invalid {
  composes: common;
  /* anything that only applies to Invalid */
}
.ready {
  composes: common;
  /* anything that only applies to Ready */
}
.inProgress {
  composes: common;
  /* anything that only applies to In Progress */
}
```

No seriously. At some point you have a list of all the styles you like for your current build. At another point you map that to the elements you're working with. That's a pretty fundamental task for styling up a website. Look at it with raw CSS:

```css
.some_element {
  font-size: 1.5rem;
  color: rgba(0,0,0,0);
  padding: 0.5rem;
  box-shadow: 0 0 4px -2px;
}
```

Pure styling. This element—these styles. It's simple, and its remarkable in its way. But forgetting that the name `.some_element` needs to stay afloat in a global ocean, the colour, the font-size, the shadow, everything is specified here, in its infinite detail, yet it is probably something you want to use somewhere else. Enter BEM & Sass:

```scss
$large-font-size: 1.5rem;
$dark-text: rgba(0,0,0,0);
$padding-normal: 0.5rem;
@mixin subtle-shadow {
  box-shadow: 0 0 4px -2px;
}

.some_element__header {
  @include subtle-shadow;
  font-size: $large-font-size;
  color: $dark-text;
  padding: $padding-normal;
}
```

That's an improvement, sure, but you've extracted *half* of every variable, and used naming to constrain the other. Think about `@mixin subtle-shadow` in the example above: can you think of a *variable* that would replace it? Plenty of CSS developers have learned to lean on `@extend` in these circumstances, but the problems of that are manifold. IIn CSS Modules:

```css
.head {
  composes: large from "./typography.css";
  composes: dark-text from "./colors.css";
  composes: padding-all-medium from "./layout.css";
  composes: subtle-shadow from "./effect.css";
}
```

...

## Runtime is nothing

## Play around, and never leave
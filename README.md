# Splash
Splash is a simple pop-in contact form that can positioned in any of the four corners.

## Requirements
* jQuery 2.1.3 or above - https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js

## Structure
```
dir/
	assets/
		scss/
			- splash.scss
		css/
			- splash.css
			- splash.css.map
		js/
			- splash.js
	- index.html
	- index.jade
```

## Installation
Installing this widget is fairly simple.

First, you'll add the following code anywhere inside the `<body>` tag.
```html
<a href="#form-name" data-ripple="true" data-ripple-color="#fff" data-posX="left" data-posY="top" class="sp-button">Contact</a>
```

You'll notice that you have several options for this button.

* `href` will be linking your button to a specific form.
* `data-ripple` can either be set as `true` or `false`.
* `data-ripple-color` is where you define the hex color of the ripple.
* `data-posX` is to set the horizontal location of your button, either `right` or `left`.
* `data-posY` is to set the vertical location of your button, either `top` or `bottom`.

Second, you'll need to add the following code to the bottom of your code, preferably before the `</body>` tag.
```html
    <!-- Overlay-->
    <div class="sp-overlay"></div>
```
```html
    <!-- Form-->
    <form id="form-name" data-animation="fadeIn" class="sp-form">
      <!-- Header-->
      <div class="sp-form-header">Contact Me<a href="#" class="sp-close"></a></div>
      <!-- Row-->
      <div class="sp-form-row">
        <!-- Input-->
        <input type="text" placeholder="First Name" required class="sp-form-input">
        <!-- Input-->
        <input type="text" placeholder="Last Name" required class="sp-form-input">
      </div>
      <!-- Row-->
      <div class="sp-form-row">
        <!-- Input-->
        <input type="text" placeholder="Email" required class="sp-form-input">
      </div>
      <!-- Row-->
      <div class="sp-form-row">
        <!-- Input-->
        <input type="text" placeholder="Phone Number" required class="sp-form-input">
      </div>
      <!-- Row-->
      <div class="sp-form-row">
        <!-- Textarea-->
        <textarea type="text" placeholder="Insert your message here..." required class="sp-form-textarea"></textarea>
      </div>
      <!-- Row-->
      <div class="sp-form-row">
        <!-- Submit Button-->
        <button type="submit" data-ripple="true" data-ripple-color="#fff" class="sp-form-button">Send Message</button>
      </div>
    </form>
```

Taking a look at the `.sp-form` element, you'll see that there are `id` and `data-animation` attributes.

* `id` is what you'll be using to link the `.sp-button` to your form.
* `data-animation` is what animation will be used for the popup in modal. You have the following options for animations:
	`slideInTop`, `slideInRight`, `slideInBottom`, `slideInLeft`, `scaleIn`, `fadeIn`, `flipInX`, `flipInY`.

## Author
**Andy Tran**

* http://andytran.me
* http://codepen.io/andytran
* http://github.com/andyhqtran

## Copyright & License
Code and documentation copyright 2015 Andy Tran. Code released under the MIT license.
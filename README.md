# Shine Solar Brand CSS
Shine Solar is at that point now where it needs to have an incredibly more consistent brand and with a stud developer and a stud designer, we're at a point where we can include a brand CSS stylesheet that will do just that. The purpose of this branded CSS library is to make on-brand development of web projects more efficient and more consistent. This brand CSS library is built on SCSS (with specific conventions, more on that in a minute) and will be created as a "drag and drop" stylesheet that *must* be included on every single Shine Solar web project. Read on for the CSS methodology used, the naming conventions for writing the code, and some gotchas and tips for navigating this library!

## CSS Methodology
There is no one CSS methodology used in building this library. Many of them have been compiled and brought together, but this library has its own specific flair. As such:

* We emulate Object Oriented CSS (https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/) by using class names as element names where ever possible, e.g.: .button instead of .orange-button. 
* We emulate SMACSS (https://smacss.com/) by styling the raw elements as much as possible, and when that's not possible, calling your classnames, attributes, etc... their element name or their current state.

Mostly, the CSS methodology we use is as such: wherever possible *in this library* we style the raw elements as much as possible and use classes only when we cannot style the raw element. We do this for two main reasons:
1. Speed of development. When you can drop a library into a coded HTML page, refresh the page and watch it get half done *just by including the stylesheet* not only does that automatically speed up development, but (at least for this developer) it is an amazing thing to see and boosts my confidence to "oh yeah, I can get this done".
2. Restriction to brand. The main reason for creating this library was to ensure brand consistency, and when the styles are applied to the elements themselves (as opposed to putting the classes where they need to go), it is just one more step towards that ever-important brand consistency. When brand consistency is easy, it is achievable. 

## Naming/Coding Conventions
Follow the CSS methodology up above (in short, style the raw elements as much as possible and when you can't, use class names that equal the element you're styling OR the state you want to style it to.) and here are the actual filename/coding conventions:
1. Do not put styles in the style.scss or `_index.scss` files. These are meant for imports only and lend themselves to cleaner, more modular code.
2. Underneath every directory in the `/src/partials/` directory, include the following:
- `_index.scss` 
- `/partials`
- `/partials/_base.scss`
- `/partials/_whateverelseyouwant.scss`
- Finally, include the `_index` partial in the style.scss file
3. When you encounter class names with multiple words, use `-` and not `_`, and leave the whole string lowercase.
4. Nest where you can in the SCSS

## Gotchas/Tips
* The styles for the buttons exist under: /src/partials/forms/partials/. I did this (instead of putting them under base) because usually when you're coding buttons, they're in forms. I might change this later, but for right now, that's where they are
* I wasn't sure what to call my typeface partials, and so I chose `_headings` (pretty obvious, these are all of your `h.*` tags) and `_primary`. `_primary` holds all of the regular typefaces (what goes in everything except your `h*` tags). I'll probably change that later when I come up with a snappier name for it. Until then, know that tip.
* The partials under responsiveness has every other partial except for responsiveness. Maybe it's just me, but including a `_responsive` partial under `_responsiveness` just seems too much like an infinte loop to me, so it's not getting included. 

## TODOs
* Write the code :)
* Automate #2 from Naming/Coding Conventions (just a little rust script to include?)

## Authors

* **Adam McGurk** - Lead Developer: Shine Solar amcgurk@shinesolar.com
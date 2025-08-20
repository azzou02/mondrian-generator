# Mondrian Generator
An interactive, generative sketch that recursively subdivides a canvas into rectangles and randomly fills some with a limited Mondrian palette. Click to regenerate; the layout is responsive to the window size.

## Demo
[demo](https://openprocessing.org/sketch/2704753)

## How it works
This sketch uses a recursive subdivision algorithm to split the canvas into smaller rectangles:
* At each step, pick a vertical or horizontal split based on aspect ratio.
* Stop subdividing when the region is small enough (or randomly, for variation).
* With ~25% probability, fill a leaf rectangle with one of the classic Mondrian colors.

## Main controls
Click / Tap: Regenerate a brand new composition.
Resize window: Canvas adapts to the available space.

## Tech
p5.js (client-side)
Vanilla JavaScript, HTML, CSS no build tools required


## License 
CreativeCommons Attribution NonCommercial ShareAlike
https://creativecommons.org/licenses/by-nc-sa/3.0

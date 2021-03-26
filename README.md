# Drawing Pad

This is a small project that I created for my WebDev class.

---
## What is it?
Simply put, it is a drawing pad that has a 'save' and a 'clear' function so you can save and come back to your drawing later, or clear the canvas for a new drawing if you want.

---
## Creation Process
Well, I saw a Mulskin notebook created using SCSS in Codepen, and I thought to myself "why not create a notebook or drawing pad?".

Therefor, I decided to try learning how to create a canvas that you can draw on, which was actually fairly simple, at first. Without resizing or trying to align the canvas to my own liking, the drawing function worked perfectly, but as soon as I tried centering the canvas on the page, or would change the size through CSS, it would cause issues, such as the drawing not occuring where the mouse is, or it was not at a 1x1 pixel ratio. It took me a bit to figure it out, but the 1x1 pixel ratio issue was fixed with the `resizeCanvasToDisplaySize` function in `drawing.js`. Essentially, at startup and whenever the window/display size is changed, we reassign the canvas width and height through DOM editing HTML, making sure that the resolution matched the actual size of the canvas.

Initially, drawing presented no other issues once I fixed that, but when resizing the canvas, we start to get the issue where the drawing wouldn't occur where the mouse is. Sadly, I have yet to find a fix for this, so it is currently on the [TO-DO list](#TO-DO). I wanted to also be able to save the drawing if you want to come back to it later, so this is where I put local storage functions to use in `button.js`. And what if we want to have a clean slate? I added a function that clears the canvas in `button.js` as well. Sadly, I don't have an 'eraser' function, so you can't correct drawing mistakes easily just yet (also on the [TO-DO list](#TO-DO)).

---
## TO-DO
Feature |
---------|
Drawing Alignment |
Eraser |
Animation |


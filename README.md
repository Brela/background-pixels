# background-pixels
A website for creating an image with colored "pixels" - could be used for website background image or Twitter/ LinkedIn banner image
## Live Site: <a href="https://background-pixels.netlify.app/" target="_blank">__background-pixels.netlify.app/__</a>

### tech used
HTML, CSS, JavaScript, and a <a href="https://iro.js.org/" target="_blank">color picker API</a> 

## users can
✔️ change pixel size
✔️ change the colors in the canvas
✔️ create either a canvas of random pixel or a pattern of differnt colors

## highlights of completed tasks
* made mobile friendly
* changed the pixel generation code from being hard-coded to being changed based on canvas size. Now, the exact amount of pixels needed is created based on the canvas size - no extra pixels/ extra javascript need to be ran
### ToDo:
* make canvas exactly (x) pixels wide and tall so that there is no extra space/ no cutoff pixels on edges
* Add option to favorite a color array and save it to the user's local storage
* Add feature to download the canvas as an image. Maybe use http://html2canvas.hertzen.com/features for this? Uses Node.js

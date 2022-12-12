# background-generator #needs a cooler name
### Live Site: <a href="https://background-pixels.netlify.app/" target="_blank">background-pixels.netlify.app/</a>

✔️ the color wheel itself is pulled in from an API  <a href="https://iro.js.org/" target="_blank">iro.js.org/</a>
✔️ everything else is coded from scratch by me
✔️ I'm open to suggestions for improvements :)

### ToDo:
* make mobile friendly
* Figure out how the colored canvas should react upon color change. 
    * Was considering storing each color's iteration number in an array so that when a color is changed, only that color has to be replaced instead of reloading the whole canvas. The problem with that is, what should the program do when someone removes a color from the array and it doesn't know whether the user will add another color to the array or not? 
* Add pixel shape and size option
* make canvas exactly (x) pixels wide and tall so that there is no extra space/ no cutoff pixels on edges
* Make pixel creation realize the end of canvas and stop. Currently I have 20,000 pixels being created with overflow hidden
* Add a few cool preset color arrays to choose from
* Add option to favorite a color array and save it to the user's local storage
* Add feature to download the canvas as an image. Maybe use http://html2canvas.hertzen.com/features for this? Uses Node.js (which is coming up soon in class 33)
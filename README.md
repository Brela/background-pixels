# background-pixels
A website for creating an image with colored "pixels" - could be used for website background image or Twitter/ LinkedIn banner image
## Live Site: <a href="https://background-pixels.netlify.app/" target="_blank">__background-pixels.netlify.app/__</a>

  <section align="left">
<a href="" target="_blank" rel="noreferrer">
<img src="https://i.ibb.co/g3qjF2b/background-pixels.png" alt="background-pixels screenshot" width="620" height="400"/>
  <a href="https://ibb.co/nbdg8Gq"><img src="" alt="" border="0"></a>
</a>
</section>
  <br>

### tech used
HTML, CSS, JavaScript, and a <a href="https://iro.js.org/" target="_blank">color picker API</a> 

## users can
✔️ change pixel size
✔️ change the colors in the canvas
✔️ create either a canvas of random pixels or a pattern of differnt colors

## highlights of completed tasks
* made mobile friendly
* changed the pixel generation code from being hard-coded to being changed based on canvas size. Now, the exact amount of pixels needed is created based on the canvas size - no extra pixels/ extra javascript need to be ran
* made canvas exactly (x) pixels wide and tall (based on calculated dimensions) so that there is no extra space/ no cutoff pixels on edges
### ToDo:
* Add info button that describes how to use it to new users
* Add option to favorite a color array and save it to the user's local storage
* Add feature to download the canvas as an image. Maybe use http://html2canvas.hertzen.com/features for this? Uses Node.js

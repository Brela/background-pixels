
$(document).ready(function () {

    //prevent default page reload on click
    document.querySelector('div').addEventListener('click', function handleClick(event) {
        event.preventDefault();
    });
    let mobile = ($(window).width() < 1000)
    let c = console.log

    let arrOfColors = ['#d7e0d4', '#a6bc9e', '#d1d1d1', '#eef2f2', '#8ad9d9', '#a5bca4']
    ////////////////////////////////// COLOR PICKER API //////////////////////////////////////
    var colorPicker = new iro.ColorPicker("#colorPicker", {
        width: mobile ? 90 : 150,    // media query to make colorPicker smaller on mobile
        color: arrOfColors[0],
        borderWidth: 1,
        borderColor: "#fff",
        margin: mobile ? 10 : 10,
        handleRadius: 7,
        layoutDirection: mobile ? "vertical" : "horizontal",
        // wheelDirection: "anticlockwise",
        layout: [
            {
                component: iro.ui.Slider,
                options: {
                    id: 'hue-slider',
                    sliderType: 'hue'
                }
            },
            {
                component: iro.ui.Box,
            }

        ]
    });

    class Square {
        constructor(props) {
            this.htmlElement = document.createElement('div')
            this.htmlElement.style.position = 'relative'
            this.htmlElement.style.top = props.top + 'px'
            this.htmlElement.style.left = props.left + 'px'
            this.htmlElement.style.width = props.size + 'px'
            this.htmlElement.style.height = props.size + 'px'
            this.htmlElement.style.backgroundColor = props.color
            // this.htmlElement.style.border = '.1px solid white'
            this.htmlElement.style.borderRadius = '3px'

            this.size = props.size
        }
        addToCanvas() {
            // let canvas = mobile ? document.querySelector('.mobileCanvas') : document.querySelector('.desktopCanvas')
            let canvas = document.querySelector('.canvas')
            canvas.appendChild(this.htmlElement)
        }

    }
    // this object is for loading the color array GUI with preset colors
    let colorArray = {
        c1: document.querySelector('.c1').style.backgroundColor = arrOfColors[0],
        c2: document.querySelector('.c2').style.backgroundColor = arrOfColors[1],
        c3: document.querySelector('.c3').style.backgroundColor = arrOfColors[2],
        c4: document.querySelector('.c4').style.backgroundColor = arrOfColors[3],
        c5: document.querySelector('.c5').style.backgroundColor = arrOfColors[4],
        c6: document.querySelector('.c6').style.backgroundColor = arrOfColors[5],
        c7: document.querySelector('.c7').style.backgroundColor = arrOfColors[6],
        c8: document.querySelector('.c8').style.backgroundColor = arrOfColors[7]
    }
    //============================================================================================
    let boxes = document.querySelectorAll('.box')

    function updateColorArray(e, box) {

        colorArray = {
            c1: document.querySelector('.c1').style.backgroundColor = arrOfColors[0] || '#ffffff',
            c2: document.querySelector('.c2').style.backgroundColor = arrOfColors[1] || '#ffffff',
            c3: document.querySelector('.c3').style.backgroundColor = arrOfColors[2] || '#ffffff',
            c4: document.querySelector('.c4').style.backgroundColor = arrOfColors[3] || '#ffffff',
            c5: document.querySelector('.c5').style.backgroundColor = arrOfColors[4] || '#ffffff',
            c6: document.querySelector('.c6').style.backgroundColor = arrOfColors[5] || '#ffffff',
            c7: document.querySelector('.c7').style.backgroundColor = arrOfColors[6] || '#ffffff',
            c8: document.querySelector('.c8').style.backgroundColor = arrOfColors[7] || '#ffffff'
        }

    }

    // ----------SHOW/ HIDE X over color array color when hovered over to signal 'remove color'---------
    boxes.forEach((box, i) => {
        box.addEventListener('mouseenter', showXoverBox)
        box.addEventListener('mouseleave', hideXoverBox)
        function showXoverBox() {
            box.classList.add("overlayX")
        }
        function hideXoverBox() {
            box.classList.remove("overlayX")

        }
    })


    // ----------------- ADD COLOR TO ARRAY on click---------------------------------------
    // when "add to color array" button is clicked, the color from the color picker is added to arrOfColors
    //and colorPicker object's color property is updated
    document.querySelector('.addColor')
        .addEventListener('click', () => {
            // read data-color attribute
            let newColor = colorPicker.color.hexString
            c(newColor)
            if (newColor) {
                // update the color picker
                colorPicker.color.set(newColor);
                //update arrOfColors
                arrOfColors.push(newColor)
                console.log(arrOfColors)
                updateColorArray()
            }
        });

    // ----------------------- REMOVE COLOR FROM ARRAY on click--------------------------------
    // removing color from color array when user clicks each box
    boxes.forEach((box, i) =>
        box.addEventListener('click',
            (e) => {
                console.log(box, i)
                arrOfColors.splice(i, 1)
                console.log(arrOfColors)
                updateColorArray(e, box)
            }))

    //==========================================================================================
    document.querySelector('.random').addEventListener('click', generateRandomPattern)
    document.querySelector('.ordered').addEventListener('click', generateOrderedPattern)

    let canvas = document.querySelector('.canvas')
    /*   canvas.style.width = window.innerWidth
      console.log(window.innerWidth) */
    let canvasWidth = canvas.offsetWidth
    let canvasHeight = canvas.offsetHeight

    let canvasDimensions = (size) => {
        return (canvasWidth / size) * (canvasHeight / size)
    }

    // sizes 8-small, 10-med, 16-larg
    let size = 8
    let numOfPixels = canvasDimensions(size)
    console.log(`Num of Pixels: ${numOfPixels}`)

    // create an array of the 3 size buttons on page
    let sizeButton = document.querySelectorAll('.sizeButton')
    // set the size based on which button was clicked (small, med, or large)
    sizeButton.forEach((el, i) => el.addEventListener('click', () => changeSize(el, i)))
    function changeSize(el, i) {
        //clear prev selected
        sizeButton.forEach(box => box.classList.remove('selected'))
        //select new
        el.classList.toggle('selected')
        // change size with if statements
        if (i === 0) {
            size = 8
        }
        if (i === 1) {
            size = 10
        }
        if (i === 2) {
            size = 16
        }
    }
    // squares is an array of every colored square; these colored squares are generated with 
    // the below functions  generateRandomPattern() or generateOrderedPattern() depending on which button
    // is clicked by the user

    let squares = []


    // generateRandomPattern() is called here to happen on page load
    // the setTimeout with a delay of 0ms allows the DOM's layout to load before generating these pixels
    setTimeout(generateRandomPattern, 0)


    function generateRandomPattern() {
        clearCanvas()
        squares = []
        //  8 for small @ 20,000,  10 for med 16,000, and 20 for large 4,000
        // need to find a way for squares to realize canvas end and stop 
        for (let i = 0; i < numOfPixels; i++) {
            const square = new Square({ top: 0, left: 0, size: size, color: generateRandomColor(i) })
            square.addToCanvas()
            squares.push(square)
        }
        function generateRandomColor(i) {
            let randomNum = Math.floor(Math.random() * arrOfColors.length)
            // if (i % 3 === 0) return arrOfColors[0]
            return arrOfColors[randomNum]
        }
    }
    // ================================== below is for ordered patterns ===========================================

    // Each array item decalres how many times the color from 'arrOfColors will be printed in the orderred pattern
    let timesEachColorPrints = [4, 4, 2, 2, 2, 2, 4, 2]
    // modifying timesEachColorPrints to match the length of the arrOfColors
    timesEachColorPrints = timesEachColorPrints.slice(0, arrOfColors.length)
    // This array position is used to check which color is being printed from 'arrOfColors' and the amount of times it need to be printed from 'timesEachColorPrints
    let arrayPosition = 0
    let printIteration = 1


    function generateOrderedPattern() {
        clearCanvas()
        squares = []
        for (let i = 0; i < 20000; i++) {
            const square = new Square({ top: 0, left: 0, size: size, color: createColorForPattern() })
            square.addToCanvas()
            squares.push(square)
        }

        function createColorForPattern() {
            if (printIteration <= timesEachColorPrints[arrayPosition]) {  // if (true) print color again
                printIteration += 1
                return arrOfColors[arrayPosition]
            } else {                                                   // else, print next color
                // increment array position and start from the 1st iteration
                arrayPosition += 1
                printIteration = 0
                if (arrayPosition > arrOfColors.length) arrayPosition = 0
                return arrOfColors[arrayPosition]
            }

        }
    }
    function clearCanvas() {
        canvas.replaceChildren()
    }


    /* not used yet, could be used for loading pixels slowly  */
    var delayInMilliseconds = 10; //1 second
    setTimeout(function () {
    }, delayInMilliseconds);



    // listen to a color picker's color:change event // do something on color change
    // color:change callbacks receive the current color
    colorPicker.on('color:change', function (color) {
        // log the current color as a HEX string
        // console.log(color.hexString);
    });
    /* //clear preloader on page load
window.addEventListener('load', function () {
    document.getElementById('preloader').style.display = 'none'
}) */

})
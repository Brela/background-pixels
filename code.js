
let c = console.log
let arrOfColors = ['#15F523', '#15F5A8', '#BBF086', '#F0DA86', '#D4C2A4']
////////////////////////////////// COLOR PICKER API //////////////////////////////////////
var colorPicker = new iro.ColorPicker("#colorPicker", {
    width: 150,
    color: arrOfColors[0],
    borderWidth: 1,
    borderColor: "#fff",
    layout: [
        {
            component: iro.ui.Box,
        },
        {
            component: iro.ui.Slider,
            options: {
                id: 'hue-slider',
                sliderType: 'hue'
            }
        }
    ]
});

/////////////////////////////////////////////////////////////////////////////////////////
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
        let canvas = document.querySelector('.canvas')
        canvas.appendChild(this.htmlElement)
    }

}
// this object is for the GUI 'Color Array', which matches each 'arrOfColors' array item
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

// removing color from color array when user clicks each box
let arr = boxes.forEach((box, i) =>
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


// squares is an array of every colored square; these colored squares are generated with 
// the below functions  generateRandomPattern() or generateOrderedPattern() depending on which button
// is clicked by the user

let squares = []

// generateRandomPattern() is called here to happen on page load
generateRandomPattern()

function generateRandomPattern() {
    clearCanvas()
    squares = []
    for (let i = 0; i < 20000; i++) {
        const square = new Square({ top: 0, left: 0, size: 10, color: generateRandomColor() })
        square.addToCanvas()
        squares.push(square)
    }
    function generateRandomColor() {
        let randomNumUpto4 = Math.floor(Math.random() * arrOfColors.length)
        return arrOfColors[randomNumUpto4]
    }
}

// Each array item decalres how many times the color from 'arrOfColors will be printed in the orderred pattern
let timesEachColorPrints = [2, 2, 2, 2, 60, 2, 2, 2]
// modifying timesEachColorPrints to match the length of the arrOfColors
timesEachColorPrints = timesEachColorPrints.slice(0, arrOfColors.length)
// This array position is used to check which color is being printed from 'arrOfColors' and the amount of times it need to be printed from 'timesEachColorPrints
let arrayPosition = 0
let printIteration = 1


function generateOrderedPattern() {
    clearCanvas()
    squares = []
    for (let i = 0; i < 20000; i++) {
        const square = new Square({ top: 0, left: 0, size: 10, color: createColorForPattern() })
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
    let canvas = document.querySelector('.canvas')
    canvas.replaceChildren()
}




/*   */
var delayInMilliseconds = 10; //1 second
setTimeout(function () {
}, delayInMilliseconds);



// console.log(hex); // hex = "#ff0000"

// listen to a color picker's color:change event // do something on color change
// color:change callbacks receive the current color
colorPicker.on('color:change', function (color) {
    // log the current color as a HEX string
    // console.log(color.hexString);
});
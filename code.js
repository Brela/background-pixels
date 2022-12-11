
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
// when "add to color array" button is clicked, color from the color picker is added to arrOfColors
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





const colorArray = {
    c1: document.querySelector('.c1').style.backgroundColor = arrOfColors[0],
    c2: document.querySelector('.c2').style.backgroundColor = arrOfColors[1],
    c3: document.querySelector('.c3').style.backgroundColor = arrOfColors[2],
    c4: document.querySelector('.c4').style.backgroundColor = arrOfColors[3],
    c5: document.querySelector('.c5').style.backgroundColor = arrOfColors[4],
    c6: document.querySelector('.c6').style.backgroundColor = arrOfColors[5],
    c7: document.querySelector('.c7').style.backgroundColor = arrOfColors[6],
    c8: document.querySelector('.c8').style.backgroundColor = arrOfColors[7]
}


document.querySelector('.random').addEventListener('click', generateRandomPattern)
document.querySelector('.ordered').addEventListener('click', generateOrderedPattern)





let boxes = document.querySelectorAll('.box')
let arr = boxes.forEach((box, i) =>
    box.addEventListener('click',
        () => {
            console.log(box, i)
            arrOfColors.splice(i, 1)
            console.log(arrOfColors)
        }))

let squares = []

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
function generateOrderedPattern() {
    clearCanvas()
    let nextIndex = 0
    let counter = 0
    squares = []
    for (let i = 0; i < 20000; i++) {
        const square = new Square({ top: 0, left: 0, size: 10, color: generateOrderedColor(i) })
        square.addToCanvas()
        squares.push(square)
    }
    function generateOrderedColor(i) {
        counter = i
        if (counter % 6 === 0) return arrOfColors[0]
        nextIndex = nextIndex + 2
        nextIndex < arrOfColors.length ? nextIndex = nextIndex : nextIndex = nextIndex - arrOfColors.length;
        return arrOfColors[nextIndex]
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
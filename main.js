// REMEMBER EVENT LISTENERS
// REMEMBER TEMLATE LITERALS
// REMEMBER node.textContent

// BUTTON VARIABLES
// SPECIAL DIVS
const displayBox = document.querySelector('#readout')
const clearKey = document.querySelector('#clear')
const equalKey = document.querySelector('#equals')
const calculator = document.querySelector('.calculator')

// NUMBER DIVS
const numberOpPad = document.querySelectorAll('.number-pad')
const oneButton = document.querySelector('#one')
const twoButton = document.querySelector('#two')
const threeButton = document.querySelector('#three')
const fourButton = document.querySelector('#four')
const fiveButton = document.querySelector('#five')
const sixButton = document.querySelector('#six')
const sevenButton = document.querySelector('#seven')
const eightButton = document.querySelector('#eight')
const nineButton = document.querySelector('#nine')
const zeroButton = document.querySelector('#zero')
const decimalButton = document.querySelector('#decimal')

// OPERATION DIVS
const divideButton = document.querySelector('#divide')
const multiplyButton = document.querySelector('#multiply')
const addButton = document.querySelector('#plus')
const subtractButton = document.querySelector('#minus')


                  // GENERAL FUNCTIONALITY:

                  // let displayText = []

                  // function refreshDisplay() {
                  //   if (displayText.length > 0) { displayBox.innerHTML(convertDisplay(displayText)) }
                  // }


                  // function convertDisplay(arrayName) {
                  //   let string = ""
                  //   for (let item of arrayName) {
                  //     string += item
                  //   }
                  //   return string
                  // }

                  // calculator.addEventListener('click', refreshDisplay())

                  // function appendDisplay() {

                  // }




// SPECIAL FUNCTIONS/EVENTS
clearKey.addEventListener('click', function () {
  displayBox.innerHTML = '<p></p>'
})

equalKey.addEventListener('click', function () {
  let text = eval(displayBox.textContent)
  displayBox.innerHTML = '<p></p>'
  displayBox.append(text)
})

//ATTEMPT AT LOOP
for(let element of numberOpPad){
  element.addEventListener('click', function(){
  let text = element.textContent
  displayBox.append(text)
  })
}



// APPROACH WITH INDIVIDUAL FUNCTIONS:

// oneButton.addEventListener('click', function () {
//   let text = document.createTextNode("1")
//   displayBox.append(text)
// })
// twoButton.addEventListener('click', function () {
//   let text = document.createTextNode("2")
//   displayBox.append(text)
// })
// threeButton.addEventListener('click', function () {
//   let text = document.createTextNode("3")
//   displayBox.append(text)
// })
// fourButton.addEventListener('click', function () {
//   let text = document.createTextNode("4")
//   displayBox.append(text)
// })
// fiveButton.addEventListener('click', function () {
//   let text = document.createTextNode("5")
//   displayBox.append(text)
// })
// sixButton.addEventListener('click', function () {
//   let text = document.createTextNode("6")
//   displayBox.append(text)
// })
// sevenButton.addEventListener('click', function () {
//   let text = document.createTextNode("7")
//   displayBox.append(text)
// })
// eightButton.addEventListener('click', function () {
//   let text = document.createTextNode("8")
//   displayBox.append(text)
// })
// nineButton.addEventListener('click', function () {
//   let text = document.createTextNode("9")
//   displayBox.append(text)
// })
// zeroButton.addEventListener('click', function () {
//   let text = document.createTextNode("0")
//   displayBox.append(text)
// })

// addButton.addEventListener('click', function () {
//   let text = document.createTextNode("+")
//   displayBox.append(text)
// })

// subtractButton.addEventListener('click', function () {
//   let text = document.createTextNode("-")
//   displayBox.append(text)
// })

// multiplyButton.addEventListener('click', function () {
//   let text = document.createTextNode("*")
//   displayBox.append(text)
// })

// divideButton.addEventListener('click', function () {
//   let text = document.createTextNode("/")
//   displayBox.append(text)
// })

// decimalButton.addEventListener('click', function () {
//   let text = document.createTextNode(".")
//   displayBox.append(text)
// })
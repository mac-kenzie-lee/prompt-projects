

const calculator = {};
// calculator.divide = (x,y)=> {
//     return x / y;
// },
// calculator.multiply = (x,y) => {
//     return x * y;
// },
// calculator.add = (x,y) => {
//     return x + y;
// },
// calculator.subtract = (x,y) => {
//     return x - y;
// },
// calculator.percentage = (x,y) => {
//     return x * (1 + y/100);  
// },
// calculator.operate = (operator, num1, num2)=>  {
//     if (operator === '+') {
//        return calculator.add(num1, num2)
//     } else if (operator === '-') {
//        return calculator.subtract(num1, num2)
//     } else if (operator === '*') {
//        return calculator.multiply(num1, num2)
//     } else if (operator === '/') {
//        return calculator.divide(num1, num2)
//     } else if (operator === '%') {
//        return calculator.percentage(num1, num2)
//     }
//}


//Selectors------------------------------------------------
const equalButton = document.querySelector("#equal")
const screenDisplay = document.querySelector(".calculator-screen-text");
const numberButtonsArray = document.querySelectorAll(".number");
const clearButton =  document.querySelector("#clear")
const operatorButtonArray = document.querySelectorAll(".operator");

//event listeners ----------------------------------------------------
clearButton.addEventListener('click', clearDisplay) 
clearButton.addEventListener('dblclick', masterClear) 
for (let btn of numberButtonsArray) {
    btn.addEventListener('click', updateDisplay)
}
turnOnTheOperators()

calculator.defaultDisplay = true;
calculator.toDisplay = "";

//functions ---------------------------------------------------------
function turnOnTheOperators() {   
for (let op of operatorButtonArray) {
    op.addEventListener('click', saveOperatorVariable)
 }
}
function turnOffTheOperators() {
    for (let op of operatorButtonArray) {
        op.removeEventListener('click', saveOperatorVariable)
    }
}



function updateDisplay(e) {
    calculator.defaultDisplay = false;
    if (calculator.toDisplay.length > 15) {
        return null;
    }
    //isolates the button and figures out what it represents in strng
    //console.dir(e.target.parentElement.children[0].innerText)
    calculator.toDisplay += e.target.parentElement.children[0].innerText;
    screenDisplay.textContent = calculator.toDisplay;
    calculator.currentDisplay = Number(calculator.toDisplay)
}
//sets the display to be 0.
function clearDisplay() {
    calculator.defaultDisplay = true;
    screenDisplay.textContent = "0.";
    calculator.toDisplay = ""
    console.clear()
    turnOnTheOperators()
}

function masterClear() {
    // delete calculator.expression
     console.log('all clear?')
     delete calculator.num1;
     delete calculator.num2;
     delete calculator.summation
  //   console.log(calculator.expression)
  //   calculator.expression = [];
     screenDisplay.textContent = 'memory cleared'
 }

const add = (n, n2) => n + n2
const subtract = (n, n2) => n - n2
const divide = (n, n2) => n / n2
const multiply = (n, n2) => n * n2

const operate = (op, num1, num2) => {
    let sum = null;
    if (op ==='+') {
        sum = add(num1, num2)    
    }
     else if (op === '−'){
            sum = subtract(num1, num2)
     }
      else if (op === '×') {
            sum = multiply(num1, num2)
       }
        else if (op === '÷') {
            sum = divide(num1, num2)
         }
          console.log(sum)
        return sum;
    }

function saveOperatorVariable(e) {
    calculator.operator = e.target.parentElement.children[0].innerText;
    if (calculator.num1 === undefined) {
        calculator.num1 = Number(screenDisplay.textContent)
    } 
    clearDisplay();
    console.log(calculator.operator)
    console.log(calculator.num1)

    //removes other operator event listeners..
    turnOffTheOperators()


}


equalButton.addEventListener('click', findSolution)


function findSolution() {
    console.log('xd')

    console.log(calculator.defaultDisplay)
    if (calculator.defaultDisplay === false) {
        console.log('n1' + calculator.num1)
        calculator.num2 = calculator.currentDisplay
        console.log('n2' + calculator.num2)
    
        calculator.summation = operate(calculator.operator, calculator.num1, calculator.num2)
        screenDisplay.textContent = calculator.summation;    
        turnOnTheOperators()
        calculator.num1 = calculator.summation    
     //   delete calculator.num2
       // calculator.num1 = calculator.summation
    }
    
}















//calculator.expression = [];


//calculator.usedAnOperator = false;








// function callAnOperator(e) {
    
   
//     calculator.currentOperator = e.target.parentElement.children[0].innerText;
//     calculator.cNum = (Number(screenDisplay.textContent));

//     if (calculator.defaultDisplay === false) {
//         //only proceeds if the user inputted a number


//         screenDisplay.textContent = calculator.currSum
//         }

//     }
 


// function equate(e) {
//     let solution;
//     console.log('em')
//     function evaluateIt(key, value, accumulator){
//         if (key === "×") {
//             return calculator.multiply(accumulator, value)
//         }
//         else if (key === "×÷"){
//            return calculator.divide(accumulator, value)
//         }
//         else if (key === "−×÷") {
//           return  calculator.subtract(accumulator, value)
//         }
//         else if (key === "+−×÷"){
//             console.log(accumulator, value, key)
//             return calculator.add(accumulator, value)
//         }
//     }


//     if (calculator.usedAnOperator === true && calculator.defaultDisplay === false) {
//         //checks if an operator was used once, and if another number was clicked
//         let run = 0;
//         calculator.lastExpression = (Number(screenDisplay.textContent))
//         let sum = null;
//         for (let element = 0; element < calculator.expression.length; element++) {
//             //first run
//             if (element === 0) {
//                 //do the calculation setup for the first number.
//                 sum = calculator.expression[element]
                
//             } else {
//                 //not the first iteration
//                 //loop just once
//                 for (let key in (calculator.expression[element])) {
//                     let value = calculator.expression[element][key]
//                     sum = evaluateIt(key, value, sum)

//                 }
//             }

//             sum = evaluateIt(calculator.currentOperator, calculator.lastExpression,sum)
            
//             return sum;
//         }
    
//     }}

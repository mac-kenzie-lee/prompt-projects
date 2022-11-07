

const calculator = {};


//Selectors------------------------------------------------
const equalButton = document.querySelector("#equal")
const screenDisplay = document.querySelector(".calculator-screen-text");
const numberButtonsArray = document.querySelectorAll(".number");
const clearButton =  document.querySelector("#clear")
const operatorButtonArray = document.querySelectorAll(".operator");
const deci = document.querySelector('#decimal')
//event listeners ----------------------------------------------------
clearButton.addEventListener('click', clearDisplay) 
clearButton.addEventListener('dblclick', masterClear) 
for (let btn of numberButtonsArray) {
    btn.addEventListener('click', updateDisplay)
}
turnOnTheOperators()

calculator.defaultDisplay = true;
calculator.toDisplay = "";
refreshDeci()

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

function refreshDeci() {
    deci.addEventListener('click', updateDeci)
    calculator.deciUsed = false;
}

function updateDeci(e){
    
    if (calculator.deciUsed === false) {
        calculator.deciUsed = true;
        updateDisplay(e)
        deci.removeEventListener('click', updateDeci)
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
    refreshDeci()
}

function masterClear() {
    // delete calculator.expression
     delete calculator.num1;
     delete calculator.num2;
     delete calculator.operator
     delete calculator.summation
     console.clear()
    refreshDeci()
     //   console.log(calculator.expression)
  //   calculator.expression = [];
     screenDisplay.textContent = 'memory cleared'
 }

const add = (n, n2) => n + n2
const subtract = (n, n2) => n - n2
const divide = (n, n2) => {
    if (n === 0 || n2 === 0) {
        return 'ERROR'
    }
    return n / n2}
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

    const per = document.querySelector('#per')
function saveOperatorVariable(e) {
    calculator.operator = e.target.parentElement.children[0].innerText;
    if (calculator.num1 === undefined) {
        calculator.num1 = Number(screenDisplay.textContent)
    } 
    clearDisplay();
    per.addEventListener('click', getThePercent)
    //removes other operator event listeners..
    turnOffTheOperators()


}


equalButton.addEventListener('click', findSolution)


function findSolution() {
    //gets the sum after pressing equal sign
    if (calculator.defaultDisplay === false) {
        calculator.num2 = calculator.currentDisplay
        calculator.summation = operate(calculator.operator, calculator.num1, calculator.num2)
        screenDisplay.textContent = calculator.summation;    
        turnOnTheOperators()
        calculator.num1 = calculator.summation    
        delete calculator.num2
    }
    
}

function getThePercent(){
    if (calculator.operator !== undefined && calculator.num1 !== undefined && calculator.defaultDisplay === false) {
        
        calculator.num2 = calculator.currentDisplay;
        if (calculator.operator === "+" || calculator.operator === "-") {
            calculator.num2 = ((calculator.num1) * calculator.num2/100);
        } else {
            calculator.num2 = (1 + (calculator.num2/100))
        }

        calculator.summation = operate(calculator.operator, calculator.num1, calculator.num2)
        screenDisplay.textContent = calculator.summation;

    }
} 

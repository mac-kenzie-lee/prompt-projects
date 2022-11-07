

const calculator = {};

calculator.divide = (x,y)=> {
    return x / y;
},
calculator.multiply = (x,y) => {
    return x * y;
},
calculator.add = (x,y) => {
    return x + y;
},
calculator.subtract = (x,y) => {
    return x - y;
},
calculator.percentage = (x,y) => {
    return x * (1 + y/100);  
},
calculator.operate = (operator, num1, num2)=>  {
    if (operator === '+') {
       return calculator.add(num1, num2)
    } else if (operator === '-') {
       return calculator.subtract(num1, num2)
    } else if (operator === '*') {
       return calculator.multiply(num1, num2)
    } else if (operator === '/') {
       return calculator.divide(num1, num2)
    } else if (operator === '%') {
       return calculator.percentage(num1, num2)
    }
}

const equalButton = document.querySelector("#equal")
const screenDisplay = document.querySelector(".calculator-screen-text");

const numberButtonsArray = document.querySelectorAll(".number");
const clearButton =  document.querySelector("#clear")

//clears the display
clearButton.addEventListener('click', clearDisplay) 


clearButton.addEventListener('dblclick', masterClear) 
equalButton.addEventListener('click', equateAndShow)

calculator.defaultDisplay = true;

for (let btn of numberButtonsArray) {
    btn.addEventListener('click', updateDisplay)
}

const operatorButtonArray = document.querySelectorAll(".operator");
for (let op of operatorButtonArray) {
    op.addEventListener('click', callAnOperator)
}

calculator.toDisplay = "";

function updateDisplay(e) {
    calculator.defaultDisplay = false;
    if (calculator.toDisplay.length > 15) {
        return null;
    }
    //isolates the button and figures out what it represents in strng
    //console.dir(e.target.parentElement.children[0].innerText)
    calculator.toDisplay += e.target.parentElement.children[0].innerText;
    screenDisplay.textContent = calculator.toDisplay;
}

function equateAndShow(e){
    calculator.toDisplay += e.target.parentElement.children[0].innerText;
    screenDisplay.textContent = equate(e)

}

calculator.expression = [];

//sets the display to be 0.
function clearDisplay() {
    calculator.defaultDisplay = true;
    screenDisplay.textContent = "0.";
    calculator.toDisplay = ""
}

function masterClear() {
    delete calculator.expression
    console.log('all clear?')
    console.log(calculator.expression)
    calculator.expression = [];
    screenDisplay.textContent = 'memory cleared'
}
calculator.usedAnOperator = false;

function callAnOperator(e) {
    calculator.usedAnOperator = true;
    calculator.currentOperator = e.target.parentElement.children[0].innerText;
    if (calculator.defaultDisplay === false) {
        //only proceeds if the user inputted a number
        if (calculator.expression.length === 0) {
        calculator.firstNumber = Number(calculator.toDisplay);
        calculator.nextOperator = calculator.currentOperator
        calculator.expression.push(Number(calculator.toDisplay));
        calculator.nextOperator = calculator.currentOperator;
    }
        
     
        else {
            console.log('erm')
            calculator.expression.push({[calculator.nextOperator]:Number(calculator.toDisplay)});         
            calculator.nextOperator = calculator.currentOperator;
        }

        clearDisplay()
    }
 

}
function equate(e) {
    let solution;
    console.log('em')
    function evaluateIt(key, value, accumulator){
        if (key === "×") {
            return calculator.multiply(accumulator, value)
        }
        else if (key === "÷"){
           return calculator.divide(accumulator, value)
        }
        else if (key === "−") {
          return  calculator.subtract(accumulator, value)
        }
        else if (key === "+"){
            console.log(accumulator, value, key)
            return calculator.add(accumulator, value)
        }
    }


    console.log('taco')
    if (calculator.usedAnOperator === true && calculator.defaultDisplay === false) {
        //checks if an operator was used once, and if another number was clicked
        let run = 0;
        calculator.lastExpression = (Number(screenDisplay.textContent))
        let sum = null;
        for (let element = 0; element < calculator.expression.length; element++) {
            //first run
            if (element === 0) {
                //do the calculation setup for the first number.
                sum = calculator.expression[element]
                
            } else {
                //not the first iteration
                //loop just once
                for (let key in (calculator.expression[element])) {
                    let value = calculator.expression[element][key]
                    sum = evaluateIt(key, value, sum)
                }
            }

            sum = evaluateIt(calculator.currentOperator, calculator.lastExpression,sum)
            
            return sum;
        }
    
    }}

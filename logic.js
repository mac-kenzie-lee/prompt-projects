

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
equalButton.addEventListener('click', equate)

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
}
calculator.usedAnOperator = false;

function callAnOperator(e) {
    calculator.usedAnOperator = true;
    calculator.currentOperator = e.target.parentElement.children[0].innerText;
    if (calculator.defaultDisplay === false) {
        //only proceeds if the user inputted a number
        
        calculator.expression.push({[calculator.currentOperator]:Number(calculator.toDisplay)});
        clearDisplay()
    }
 

}
function equate(e) {
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



    if (calculator.usedAnOperator === true && calculator.defaultDisplay === false) {
        //checks if an operator was used once, and if another number was clicked
        let run = 0;
        let lastExpression = (Number(screenDisplay.textContent))
        calculator.expression.forEach((e,i,arr) => {
            //get's the operator string
            let key = Object.keys(e)[0]
            let value = calculator.expression[0][key]
            if (calculator.run === undefined) {
                //first run
                calculator.run = true;
                calculator.accumulator = value;
                console.log('firstrun')
                run = 1;
                console.log(run)
            } else {
                    run++;
                    console.log(`${run}th run`)
                     //not first loop iteration
                    if (value !== undefined) {
                    //this checks to make sure it's not the last value 

                    //this gives an accumulator for the expression
                    console.log(calculator.accumulator)
                    console.log('g')
                    calculator.acc = evaluateIt(key, value, calculator.acc)
            
                    }
                    
                    else if (value === undefined) {
                    //this means it's the last expression
                    calculator.acc = evaluateIt(calculator.currentOperator, lastExpression, calculator.acc)
                    }
        }})
    
        let expressionToReturn = calculator.acc;
        delete calculator.acc;
        console.log()
        console.log(expressionToReturn)
        return expressionToReturn;
        //console.log(lastExpression)
    
    }
}

//1+2-3+8 //4 not working









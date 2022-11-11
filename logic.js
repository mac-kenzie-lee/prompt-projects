//Selectors------------------------------------------------
const equalButton = document.querySelector("#equal")
const screenDisplay = document.querySelector(".calculator-screen-text");
const numberButtonsArray = document.querySelectorAll(".number");
const clearButton =  document.querySelector("#clear")
const operatorButtonArray = document.querySelectorAll(".operator");
const deci = document.querySelector('#decimal')
const per = document.querySelector('#per')


//---------------variables
const numberKeys = ['1','2','3','4','5','6','7','8','9','0','.']
const deleteKeys = ["c", "e"]
const backspaceKeys = ["Backspace", "delete"]
const operatorKeys = ["*","-","+","/"]
const equalKeys = ['=']

//Object starting properties
const calculator = {};
calculator.defaultDisplay = true;
calculator.toDisplay = "";

//event listeners ----------------------------------------------------
clearButton.addEventListener('click', clearDisplay) 
clearButton.addEventListener('dblclick', masterClear) 
for (let btn of numberButtonsArray) {
    btn.addEventListener('click', updateDisplay)
}
document.addEventListener('keydown', keyboardEventHandler)
equalButton.addEventListener('click', findSolution)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//functions ---------------------------------------------------------

//Adding and removing event listeners------------------------
function enableOperatorButtons() {   
//Adds event listener to the *./,-,+ buttons
    for (let op of operatorButtonArray) {
        op.addEventListener('click', saveOperatorToMemory)
     }
}

function disableOperatorButtons() {
//removes functionality of +.- / * buttons
    for (let op of operatorButtonArray) {
        op.removeEventListener('click', saveOperatorToMemory)
    }
}
    
function enableDecimalButton() {
    //adds an event listener to the decimal key
    deci.addEventListener('click', disableDecimalButton)
    calculator.deciUsed = false;
}

function disableDecimalButton(e){
    //checks to see if the decimal was used, and removes the ability to use twice
    if (calculator.deciUsed === false) {
        calculator.deciUsed = true;
        updateDisplay(e)
        deci.removeEventListener('click', disableDecimalButton)
    }
}

//Keyboard functions--------------------------------------

function keyboardEventHandler(e) {
    e.preventDefault()
    if (numberKeys.indexOf(e.key) !== -1) {

        if (e.key === ".") {
            if (screenDisplay.textContent.indexOf('.') === -1) {
            updateDisplay(e)}
        }
        else {
            updateDisplay(e)
        }
       
    }
    if (deleteKeys.indexOf(e.key) !== -1) {
        masterClear()
    } 
    if (backspaceKeys.indexOf(e.key) !== -1) {
        clearDisplay()
    } 
    
    for (let o of operatorKeys) {
        if (e.key === o) {
            saveOperatorToMemory(e)
        }
    }
    for (let h of equalKeys) {
        if (e.key === h) {
            findSolution()
        }
    }
    if (e.key === "%") {
        getThePercent()
    }
}

function saveKeyOperatorVariable(e) {
    calculator.operator = e.key;
    if (calculator.num1 === undefined) {
        calculator.num1 = Number(screenDisplay.textContent)
    } 
}

function preventExtraZeroes(number) {
 
    if (calculator.defaultDisplay === false) {
        //this controls the trailing zeroes and only allows one zero at the beginning
    if (number === '0') {
        console.log(calculator.toDisplay)
        console.log(number)
        if (calculator.toDisplay.length === 1 && calculator.toDisplay === '0') {
            return null;
        }
    }}
}

function checkForInitialDecimal(input) {
    //This function allows a 0 before a decimal, but if there's no decimal, the zero is erased
    if (calculator.toDisplay.length === 1 && calculator.toDisplay === '0') {
        if (input !== ".") {
            calculator.toDisplay = "";
        }
    }
}

//---functions for updating the calculator screen.

function updateDisplay(e) {
    //checks to make sure a user typed or clicked something on the calculator
    calculator.defaultDisplay = false;
    if (calculator.toDisplay.length > 15) {
        return null;
    } else {
    //isolates the button and figures out what it represents in strng
    if(e.type === 'click') {
        //checks if the event was a click event, and finds the value the button represents and adds to display
        checkForInitialDecimal(e.target.parentElement.children[0].innerText)
        if (preventExtraZeroes(e.target.parentElement.children[0].innerText) !== null) {
        calculator.toDisplay += e.target.parentElement.children[0].innerText;
        }
    } else if (e.type === 'keydown') {
        //checks if event was a keydown event and adds the number from the key to the display
        //This is a string
        checkForInitialDecimal(e.key);
        if ((preventExtraZeroes(e.key)) !== null) {
        calculator.toDisplay += e.key; 
        }
    }
    //Updates the screen to be the text the user inputted
    screenDisplay.textContent = calculator.toDisplay;

    //Updates the variable holding the current calculator value as a number 
    //This is a number
    calculator.currentNumberValueOnCalculatorScreen = Number(calculator.toDisplay)
    }
}


//sets the display to be 0.
function clearDisplay() {
    //Resets the logic check to be default state of calculator screen
    calculator.defaultDisplay = true;
    //Makes the screen have the '0.' default blank state
    screenDisplay.textContent = "0.";
    
    //Resets our number variable which gets converted to our saved number later
    calculator.toDisplay = ""
    
    //Turns on the operator buttons and the decimal
    enableOperatorButtons()
    enableDecimalButton()
}

function masterClear() {
    
    // delete calculator.expression
    //clear's residual data
    delete calculator.summation;
    delete calculator.num1;
    delete calculator.num2;
    delete calculator.operator;
    console.clear()
    enableDecimalButton()
    enableOperatorButtons()
    //displays a message on the screen 
    screenDisplay.textContent = 'memory cleared'
    setTimeout(clearDisplay, 1000)
        
    
}


//Calculation functions in variables--------------
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
    else if (op === '-' || op === '−'){
            sum = subtract(num1, num2)
    }
    else if (op === '×' || op === '*'){
            sum = multiply(num1, num2)
    }
    else if (op === '÷' || op === "/"){
            sum = divide(num1, num2)
    }
    return sum;
    }


function saveOperatorToMemory(e) {
    
    if(e.type === 'click') {
        calculator.operator = e.target.parentElement.children[0].innerText;
    } else if (e.type === 'keydown') {
        calculator.operator = e.key; 
    }
  

    if (calculator.num1 === undefined) {
        calculator.num1 = Number(screenDisplay.textContent)
    }

    clearDisplay();
    per.addEventListener('click', getThePercent)
    //removes other operator event listeners..
    disableOperatorButtons()


}



function findSolution() {
    //gets the sum after pressing equal sign
    if (calculator.defaultDisplay === false) {
        calculator.num2 = calculator.currentNumberValueOnCalculatorScreen
        calculator.was1 = calculator.num1
        calculator.summation = operate(calculator.operator, calculator.num1, calculator.num2)
        screenDisplay.textContent = String(calculator.summation);    
        enableOperatorButtons()
        calculator.num1 = calculator.summation    
        delete calculator.num2
    } 
    
}

function getThePercent(){
    if (calculator.operator !== undefined && calculator.num1 !== undefined && calculator.defaultDisplay === false) {
        
        calculator.num2 = calculator.currentNumberValueOnCalculatorScreen;
        if (calculator.operator === "+" || calculator.operator === "-") {
            calculator.num2 = ((calculator.num1) * calculator.num2/100);
        } else {
            calculator.num2 = (1 + (calculator.num2/100))
        }
        calculator.summation = operate(calculator.operator, calculator.num1, calculator.num2)
        screenDisplay.textContent = calculator.summation;

    }
} 


//***Running code */
enableOperatorButtons()
enableDecimalButton()

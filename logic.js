

const calculator = {};
calculator.num1 = 0;
calculator.num2 = 0;
calculator.clear = () => {
if (calculator.num1 !== undefined) {
    delete calculator.num1;
}
if (calculator.num2 !== undefined) {
    delete calculator.num2;
}

}
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

const screenScreen = document.querySelector(".calculator-screen-text");






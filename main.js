// I want C to clear the screen when I click the button 'C'
// Ι want to calculate the addition, subtraction, multiplication and division of n numbers
// I want to show the result of the calculation

// How to target the buttons:
let currentInput = '';
let firstOperand = '';
let currentOperator = '';
let display = document.querySelector('#screen');
// display.value = '0';
// let displayVal = display.value;
const keys = document.querySelectorAll('.btn');

keys.forEach( key => key.addEventListener('click', (event) => {
    const {target} = event;
    const btn = target.value;
    console.log(btn);



    if(!isNaN(btn) || btn === '.') {
        appendNumber(btn);
        // display.value = btn;
    } else if(btn === '+' || btn === '-' || btn === '*' || btn === '/'){
        appendOperator(btn);   
    } else if(btn === '='){
        calculateResults();
    } else if(btn === 'C') {
        clearScreen(btn);   
    }
}))

function appendNumber(values){
    currentInput += values;
    display.value = currentInput;
}

function appendOperator(operator){
    if(currentInput !== ''){
        firstOperand = currentInput;
        currentInput = '';
        currentOperator = operator;
    }
}


// Calculate there results
function calculateResults(){
    if(firstOperand !== '' && currentInput !== ''){
        const secondOperand = currentInput;
        const result = eval(`${firstOperand} ${currentOperator} ${secondOperand}`);
        display.value = result;
        currentInput = result;
        currentOperator = '';
 
    }
}
// Clear screen values
// function clearScreen(clearBtn) {
//     if(clearBtn === 'C') {
//         display.value = 0;
//     }
//}
function clearScreen(clearBtn) {
  currentInput = '';
  currentOperator = '';
  firstOperand = '';
  display.value = '';
}



// function calc(val){
    
// }
let currentInput = '';
let operator = '';
let firstOperand = '';
let result ='';
const screen = document.querySelector('#screen');
let buttons = document.querySelectorAll('.item-container button');
console.log(buttons);

// btn7.addEventListener('click', () => {console.log(btn7.value)});



function appendInput(number) {
    currentInput += number;
    screen.value = currentInput;
}

function appendOperator(oper) {
    if(currentInput !== '') {
        firstOperand = currentInput;
        currentInput = '';
        operator = oper;
    }
}

// Calculating the result
function calcResult() {
    if(currentInput!== '' && operator!== '') {
        const secondOperand = currentInput;
        result = eval(`${firstOperand}  ${operator} ${secondOperand}`);
        currentInput = result;
        screen.value = result;
        operator = '';
    }
}

// Clearing the screen
function clearScreen() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    result = '';
    screen.value = '';
}

buttons.forEach( (button) => {
    button.addEventListener('click', () => {
        console.log(button.value);
        const value = button.textContent;
        if(!isNaN(value)){

           appendInput(value);
        }
        else if(value === '+' || value === '-' || value === '*' || value === '/') {
                    console.log(value)
            appendOperator(value);
        } else if(value === '=') {
                    console.log(value)
            calcResult();
        } else if(value === 'C') {
            clearScreen();
        }
    })
})
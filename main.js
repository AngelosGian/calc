const screen = document.querySelector('#screen');
// let btn7 = document.querySelector('.btn-7');
let currentInput = '';
let operator = '';
let result ='';

btn7.addEventListener('click', () => {console.log(btn7.value)});


function appendInput(number) {
    currentInput += number;
    screen.innerHTML = currentInput;
}
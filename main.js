// I want C to clear the screen when I click the button 'C'
// Ι want to calculate the addition, subtraction, multiplication and division of n numbers
// I want to show the result of the calculation

// How to target the buttons:
let display = document.querySelector('#screen');
const keys = document.querySelectorAll('.btn');

keys.forEach( key => key.addEventListener('click', (event) => {
    const {target} = event;
    const btn = target.value;
    console.log(btn);

    clearScreen(btn);
    if(!isNaN(btn)) {
        display.value = Number(btn);
    }
}))

function clearScreen(clearBtn) {
    if(clearBtn === 'C') {
        display.value = 0;
    }
}
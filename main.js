const screen = document.querySelector('#screen');
const btns = document.querySelectorAll('.btn');
let result;


console.log(btns);

document.addEventListener('click', returnValues);

function returnValues() {
    
    btns.forEach(item => {
       console.log(item.value);
    });
}
returnValues();
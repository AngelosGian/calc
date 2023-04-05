const screen = document.querySelector('#screen');
const btns = document.querySelector('.items');

let result;



btns.addEventListener('click', function returnValues(e) {
        const {target} = e;
        const {value} = target;

        if(!target.matches('button')){
            return;
        } else {

        }

        // btns.forEach((item, index )=> {
        // console.log(Number(item.value));
        //     // return screen.innerText = Number(item[index-1].value);
        // });    
     
});


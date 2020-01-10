 

let $score;
let num1 = 23;
let num2 = 4;

const btn1 = document.querySelector('.btn2');
const btn2 = document.querySelector('.btn3');

let span1 = document.querySelector('.sum');
let span2 = document.querySelector('.times')


function add(){
    $score = num1+num2;
    span1.textContent = $score;
}

function multiply(){
    span2.innerText = num1*num2;
}

function divide(){
    span2.innerText = num1/num2;
}

btn1.addEventListener('click', multiply);
btn2.addEventListener('click', divide);
add(num1, num2);

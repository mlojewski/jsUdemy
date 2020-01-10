const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const verify = () => {
    if(pass.value !== '') {
        checkPassword();
    } else {
        p.innerHTML = 'No password';
        p.style.color = '';
    }
}

const checkPassword = () => {
    if(pass.value.length >= minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)) {
        p.innerHTML = 'Password ok';
        p.style.color = 'blue'
    } else if (pass.value.length >= minValue && pass.value.match(letters) && pass.value.match(numbers)) {
        p.innerHTML = 'Password mediocre'
        p.style.color = 'green'
    } else {
        p.innerHTML = 'Your password is rubbish';
    }
}

pass.addEventListener('keyup', verify)
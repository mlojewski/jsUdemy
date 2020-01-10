const but = document.querySelector('.burger');
const menu = document.querySelector('nav');

const slide = () => {
    if(but.firstElementChild.classList.contains('hide')) {
        moveBack();
        changeBack();
    } else {
        move();
        changeIcon();
    }
}

const move = () => {
    menu.classList.add('active');
    but.classList.add('active');
}

const moveBack = () => {
    menu.classList.remove('active');
    but.classList.remove('active');
}

const changeIcon = () => {
    but.firstElementChild.classList.add('hide')
    but.lastElementChild.classList.remove('hide')
}

const changeBack = () => {
    but.firstElementChild.classList.remove('hide')
    but.lastElementChild.classList.add('hide')
}

but.addEventListener('click', slide)
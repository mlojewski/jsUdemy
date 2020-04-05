// const btns = document.querySelectorAll('button');

// for (const btn of btns){
//     btn.addEventListener('click', function(){
//         console.log(this.innerText);
//     })
// }

// const colorsObj = {
//     colors: ['red', 'green', 'blue'],

//     showColors() {
//         this.colors.forEach(function(el, i) {
//             console.log(this.colors[i]);        
//         }.bind(this)
//         )
//     }
// }

// colorsObj.showColors();

function add(x, y) {
    return this.a + this.b + x + y;
}

const numbers = {
    a: 1, 
    b: 9
}

console.log(add.call(numbers, 5, 6));
console.log(add.apply(numbers, [5,2]));

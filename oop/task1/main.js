const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const par = document.querySelector('.output')

function Food(name, price) {
    this.name = name;
    this.price = price;
}

Food.prototype.show = function() {
    par.innerHTML = `${this.name} kosztuje ${this.price} złotych`;
}

const kawa = new Food('kawa', 4);
const herbata = new Food('herbata', 3);
const woda = new Food('woda',2);

btn1.addEventListener('click', function(){kawa.show()});

btn2.addEventListener('click', function(){herbata.show()});

btn3.addEventListener('click', function(){woda.show()});

for (const data in kawa) {
    console.log(kawa[data]);
}
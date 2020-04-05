// const user = {
//     name: 'Lily',
//     age: 23,
//     'fav_color': 'niebieski',
//     car: {
//         brand: 'audi'
//     }
// }

// function showUserInfo() {
//    console.log(`${this.name} ma ${this.age} lat i jej ulibiony kolor to ${this['fav_color']}`);
// }

// const showCarInfo = function (carColor) {
//     console.log(`ulubione auto to ${carColor} ${this.car.brand}`);
// }

// showUserInfo.bind(user)();
// showCarInfo.call(user, 'zielone');

class Transport {
    constructor(capacity, speed, name) {
        this.capacity = capacity;
        this.speed = speed;
        this.name = name;  
    }
    
    checkCapacity() {
        console.log(`${this.name} może zabrać ${this.capacity} pasażerów`);
    }
}

class Car extends Transport {
    constructor(capacity, speed, name, engineType, brand) {
        super(capacity, speed, name);
        this.engineType = engineType;
        this.brand = brand;
    }

    showSpec() {
        console.log(`${this.name} ma silnik ${this.engineType} i zbudował go ${this.brand}`);
    }
}

const newCar = new Car (5, 220, 'adela', 'diesel', 'syrena');

newCar.showSpec();
console.log(newCar);
const input = document.querySelector('input');
const btn = document.querySelector('button');

const cityName = document.querySelector('.city-name');
const warning = document.querySelector('.warning');
const photo = document.querySelector('.photo');

const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');

const apiLink = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiLinkEnd = "&appid=3c1e0b5377114b0de033dfe6ba759f10&units=metric";

let city;
let url;

const getWeather = () => {
    city = (!input.value) ? 'Warsaw' : input.value;

    url = `${apiLink}${city}${apiLinkEnd}`;

    axios.get(url)
    .then(res => {
        const temp = res.data.main.temp;
        const hum = res.data.main.humidity;
        const weatherStatus = Object.assign({}, ...res.data.weather)

        cityName.textContent = res.data.name;
        temperature.textContent = temp + " C";
        humidity.textContent = hum + ' %';
        weather.textContent = weatherStatus.main
        photo.setAttribute('src', './WeatherApp grafiki/'+getIcon(weatherStatus.id));
        warning.textContent = '';
        input.value = '';
    })
    .catch(() => {
        warning.textContent = "Wpisz poprawną nazwę miasta."
    });
};
getWeather()
btn.addEventListener('click', getWeather);


function getIcon(id) 
{
    if( id > 199 && id < 299 ) {
        return 'thunderstorm.png';
    } else if (id > 299 && id < 399) {
        return 'drizzle.png';
    } else if (id > 499 && id < 599) {
        return 'rain.png'; 
    } else if (id > 599 && id < 699) {
        return 'ice.png';
    } else if (id > 699 && id < 799) {
        return 'fog.png';
    } else if (id == 800) {
        return 'sun.png';
    } else if (id > 800 && id < 810) {
        return 'cloud.png';
    } else {
        return 'unknown';
    }
}

const enterCheck = () => {
    if(event.keyCode === 13) {
        getWeather();
    }
}
input.addEventListener('keyup', enterCheck);
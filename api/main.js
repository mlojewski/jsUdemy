const button = document.querySelector('button');
const img = document.querySelector('img');
const url = 'https://dog.ceo/api/breeds/image/random'; //miejsce które ma api z losowymi fotami psów

button.addEventListener('click', function() { //na klik żeby działało
    //fetch - wysyła request do api
fetch(url)
.then(res => res.json()) // generuje obiekt responsa jeśli api zwróci od 100 do 300 i rzutuje go do jsona
.then(res => {
    img.setAttribute('src', res.message)// ustawia src w htmlu na element jsona
    img.style.width = '500px'
    })
.catch(err => console.log(err)) // generuje obiekt błędu jeśli taki będzie zwrócony przez api
} )
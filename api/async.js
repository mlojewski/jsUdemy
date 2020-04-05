

function checkAge(age) {
    return new Promise((resolve, reject) => {
        console.log(`Twój wiek to ${age}`);
//promise to jest zapytanie do servera, resolve jest dobrą odp i skutkuje responsem, reject jest złą odp i skutkuje errorem
        if(age >= 18) {
            resolve('jest ok');
        } else {
            reject('nie jest ok')
        }
    })
};

function doubleCheck (ageConfirm) {
    return new Promise ((resolve, reject) => {
        console.log('jeszcze raz');
        resolve(`faktycznie ${ageConfirm}`);
    })
}
// można to rozpisać jako metoda.then().catch() ale lepiej jest użyć async (oznacza funk asynchroniczną) i await wtedy funkcja wykonuje się też krok po kroku a obudowanie jej w try catcha powoduje że ona zbiera błędy z każdego etapu wykonywania tego co w try
async function ckeckAge2(){
    try {
        const age = await checkAge(2);
        console.log('możesz wejść');
        const dblCheck = await doubleCheck(age);
        console.log(dblCheck);
     } catch (err) {
         console.log(err);
     }
} 
ckeckAge2()
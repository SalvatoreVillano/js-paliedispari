const pariDispari = prompt('Scegli tra pari o dispari').toLowerCase();
const tuoNum = parseInt(prompt('Scegli un numero da 1 a 5'));

function calcoloPariDispari(a){
    let risultato;
    if (a % 2 == 0){
        risultato = 'pari';
    } else{
        risultato = 'dispari';
    }

    return risultato;
}

function somma (a, b){
    return a + b;
}

function randomize(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function vincitore(pariDispari, pd){
    let risultato;
    if (pariDispari == pd){
        risultato = `Hai vinto!! Il numero è ${pd}`
    } else{
        risultato = `Hai perso.... Il numero è ${pd}`
    }
    return risultato
}
    
window.alert(vincitore(pariDispari, calcoloPariDispari(somma(tuoNum, randomize(1, 5)))));
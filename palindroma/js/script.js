const btn = document.getElementById("esegui");
const result = document.getElementById("result");

function controlloParolaPalindroma(){

    const parola = document.getElementById("palin").value;
    let risultato;
    let parolaInversa = [];
    const parolaArray = parola.split('');
    for(i = parola.length; i >= 0 ; i--){
       parolaInversa.push(parolaArray[i]); 
    }
    console.log(parolaInversa);

    const parolaInversaStringa = parolaInversa.join('')

    if(parola === parolaInversaStringa){
        risultato = 'è una parola polindroma';
    } else {
        risultato = 'non è una parola polindroma';
    }
    console.log(risultato);
    result.innerHTML = risultato;
    return risultato;
}

btn.addEventListener('click', controlloParolaPalindroma);

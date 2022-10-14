const parola = document.getElementById("palin").value;
const btn = document.getElementById("esegui");
const result = document.getElementById("result");


function controlloParolaPalindroma(parola){

    let risultato;
    let parolaInversa = [];
    const parolaArray = parola.split('');
    for(let i = 0; i < parola.lenght; i++){
       parolaInversa.push(parolaArray[i]); 
    }
    console.log(parolaInversa);

    if(parola == parolaInversa){
        risultato = 'è una parola polindroma';
    } else {
        risultato = 'non è una parola polindroma';
    }
    return risultato;
}
 

btn.addEventListener('click', controlloParolaPalindroma('parola'));
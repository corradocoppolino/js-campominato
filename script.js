// DIFFICOLTA'

//all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
//con difficoltà 0 => tra 1 e 100
//con difficoltà 1 => tra 1 e 80
//con difficoltà 2 => tra 1 e 50

var limite = 0;
var esci = false;

while(esci == false){

    var num = parseInt(prompt("inserisci la difficolta!!\n0: FACILE\n1: MEDIO\n2: DIFFICILE"));

    if(num == 0){

        limite = 100;            
        esci = true;
        
    }else if(num == 1){
        
        limite = 80;            
        esci = true;
        
    }else if(num == 2){
        
        limite = 50;
        esci = true;
        
    }else{
             
        alert("Devi inserire 0, 1 o 2");
        esci = false;
        
    }

}

//VARIABILI 

var numeroBombe = 16;
var maxTentativi = limite - numeroBombe;
var arrBombe = bombeRandom(numeroBombe,limite);
var risultato = false;
var arrNumeriGiocati = [];
var lunghezza = arrNumeriGiocati.length;
var contatore = 1;

console.log(arrBombe);

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.

while(risultato == false){

    var numero = parseInt(prompt("Inserisci un numero"));

    console.log(numero);

    if(arrBombe.includes(numero) == true){

        alert("HAI PERSO!! dopo " + contatore + " tentativi");
        risultato = true;

    }else if(arrNumeriGiocati.includes(numero)){
    
        alert("ATTENZIONE, hai già giocato questo numero.\nRIPROVA");

    }else if(numero > limite){

        alert("ATTENZIONE il numero deve essere compreso tra 1 e " + limite);

    }else if(numero < 1){

        alert("ATTENZIONE il numero deve essere compreso tra 1 e " + limite);

    }else if(isNaN(numero) == true){

        alert("ATTENZIONE non hai inserito un numero");

    }else{

        arrNumeriGiocati.push(numero);
        contatore++;
        if(contatore === maxTentativi){

            alert("HAI VINTO!!");
            risultato = true;

         }

    }

}

console.log(risultato);


// FUNZIONI

// Il computer deve generare 16 numeri casuali tra 1 e 100

function bombeRandom(bombe,max){

    var random = []; 

    while(random.length < bombe){
        
        var r = Math.ceil(Math.random() * max);
        if(random.indexOf(r) === -1){
            random.push(r);
        } 
    
    }

    return random;

}



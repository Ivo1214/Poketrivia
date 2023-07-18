"use strict";

const maximoEncuestados = 16; // Numero maximo de pokemons a preguntar

let numero = 0;  // Se utiliza para saber el nº de pokemon a adivinar
let cantidadAcertados;  // Se utiliza para saber cuantos pokemons fueron adivinados
let cantidadEncuestados; // Se utiliza para saber cuantas veces se encuesto al usuario
let acerto = false; //Se usa para que el usuario sea forzado a actualizar el pokemon para continuar, de lo contrario haria trampa no cambiando el pokemon al acertar
let pokemon;
if (sessionStorage.getItem('cantidadEncuestados') === null) {
    sessionStorage.setItem('cantidadAcertados', 0);
    sessionStorage.setItem('cantidadEncuestados',0);
}




// Funcion que muestra el puntaje
function cargarPuntaje () {
    parseInt(sessionStorage.getItem('cantidadAcertados'))>(parseInt(sessionStorage.getItem('cantidadEncuestados'))/2) ? document.getElementById("puntaje").classList.remove("puntajeBajo"):document.getElementById("puntaje").classList.add("puntajeBajo")
    
    document.getElementById("puntaje").innerText = `Puntaje ${sessionStorage.getItem('cantidadAcertados')} de ${sessionStorage.getItem('cantidadEncuestados')}`;
};


// Funcion que cambia el pokemon a adivinar
function restart() {
    acerto = false;
    document.querySelector("#resultText").innerHTML = "";
    document.querySelector("#imgpokemon").classList.remove("success");
    document.getElementById("input").value = "";
    let pokemons = JSON.parse(jsonData);
    numero = Math.floor(Math.random() * pokemons.length);
    pokemon = new Pokemon(pokemons[numero].id, pokemons[numero].name);
    document.querySelector("#imgpokemon").setAttribute("src", pokemon.thumbnail);
    document.getElementById("skills-description").style = "display: none;";
}

// Funcion que reinicia el juego
function restarGame () {
    sessionStorage.setItem('cantidadAcertados', 0);
    sessionStorage.setItem('cantidadEncuestados',0);
    restart();
    cargarPuntaje();
}

// Funcion que evalua la calificacion obtenida al final de juego
function final () {
    const encuestados = parseInt(sessionStorage.getItem('cantidadEncuestados'));
    if (encuestados === maximoEncuestados) {
        const acertados = parseInt(sessionStorage.getItem('cantidadAcertados'));

        if (acertados === encuestados) {
            alert("Rango Obtenido: Master");
        } 
        else if (acertados > (encuestados * 0.70)){
            alert("Rango Obtenido: Ultra");
        } 
        else if (acertados >= (encuestados * 0.50)){
            alert("Rango Obtenido: Super");
        } 
        else {
            alert("No has podido clasificarte");
        }
        alert ("Reiniciando juego...");
        restarGame();
    }
}

cargarPuntaje ();
agregarEventos();
restart();

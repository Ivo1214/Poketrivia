"use strict";

let numero = 0;  // Se utiliza para saber el nº de pokemon a adivinar
let cantidadAcertados;  // Se utiliza para saber cuantos pokemons fueron adivinados
let cantidadEncuestados; // Se utiliza para saber cuantas veces se encuesto al usuario
let pokemon;
if (sessionStorage.getItem('cantidadEncuestados') === null) {
    sessionStorage.setItem('cantidadAcertados', 0);
    sessionStorage.setItem('cantidadEncuestados',0);
}





function cargarPuntaje () {
    parseInt(sessionStorage.getItem('cantidadAcertados'))>(parseInt(sessionStorage.getItem('cantidadEncuestados'))/2) ? document.getElementById("puntaje").classList.remove("puntajeBajo"):document.getElementById("puntaje").classList.add("puntajeBajo")
    
    document.getElementById("puntaje").innerText = `Puntaje ${sessionStorage.getItem('cantidadAcertados')} de ${sessionStorage.getItem('cantidadEncuestados')}`;
};


function restart() {
    document.querySelector("#resultText").innerHTML = "";
    document.querySelector("#imgpokemon").classList.remove("success");
    document.getElementById("input").value = "";
    let pokemons = JSON.parse(jsonData);
    numero = Math.floor(Math.random() * pokemons.length);
    pokemon = new Pokemon(pokemons[numero].id, pokemons[numero].name);
    document.querySelector("#imgpokemon").setAttribute("src", pokemon.thumbnail);
    document.getElementById("skills-description").style = "display: none;";
}



cargarPuntaje ();
agregarEventos();
restart();

"use strict";

let numero = 0;  // Se utiliza para saber el nº de pokemon a adivinar
let cantidadAcertados = 0;  // Se utiliza para saber cuantos pokemons fueron adivinados
let cantidadEncuestados = 0;  // Se utiliza para saber cuantos pokemons se intentaron adivinar

// Alumno: crear la función restart:

// 1) Debe borrar el contenido de texto de "resultText"
// 2) Debe quitar la clase "success" de la imagen "imgpokemon"
// 3) Debe crear un número aleatorio de 0 a la cantidad de pokemons
// disponibles en la variable "pokemons" (proveniente del archivo data.js)
// Esa variable la debe guardar en "numero".
// 5) Debe modificar el atributo de "src" de "imgpokemon" para
// que muestre como imagen el "thumbnail" del nº de pokemon a adivinar
// (utilice la variable "numero" para buscar el pokemon candidato en "pokemons")

// function restart

function restart() {
    document.querySelector("#resultText").innerHTML = "";
    document.querySelector("#imgpokemon").classList.remove("success");
    document.getElementById("input").value = "";
    numero = Math.floor(Math.random() * pokemons.length);
    document.querySelector("#imgpokemon").setAttribute("src", pokemons[numero].thumbnail)
}

function evaluar (){
    let nombreIngresado = document.getElementById("input").value;

    if (nombreIngresado === "") {
        throw new Error("No se ingreso ningun nombre.");
    }
    else {
        cantidadEncuestados++;
        nombreIngresado.toLowerCase();
        if (nombreIngresado === pokemons[numero].name.toLowerCase()){
            document.getElementById("resultText").innerText = "Es correcto!";
            cantidadAcertados++;
            document.getElementById("imgpokemon").classList.add("success");
        }
        else {
            document.getElementById("resultText").innerText = "Es incorrecto!";
            document.getElementById("imgpokemon").classList.remove("success");
        }
        (cantidadAcertados>(cantidadEncuestados/2)) ? document.getElementById("puntaje").classList.remove("puntajeBajo"):document.getElementById("puntaje").classList.add("puntajeBajo");
    }
}


agregarEventos();
restart();

"use strict";

let buscarPokemon  = async () => {  
    let datoPokemon = await fetch (`https://pokeapi.co/api/v2/pokemon/${numero+1}`);
    if (!datoPokemon.ok){
        throw new Error (datoPokemon.status);
    }
    else{
        datoPokemon = await datoPokemon.json();
        // console.log(datoPokemon);
        document.getElementById("data-poke-name").innerText = `${datoPokemon.name}`;
        document.getElementById("data-poke-id").innerText = `N° ${datoPokemon.id}`;

        let tipos="";
        datoPokemon.types.forEach((element)=>{
            // console.log(element.type.name);
            tipos += `<div>${element.type.name}</div>`;
        });
        document.getElementById("data-poke-types").innerHTML = tipos;

        let atributos="";
        datoPokemon.stats.forEach((element)=>{
            // console.log(element.stat.name);
            atributos += `<div>
            <div>${element.stat.name}</div>
            <div>${element.base_stat}</div>
            </div>`;
        });
        document.getElementById("data-poke-stats").innerHTML = atributos;
    }
    
}
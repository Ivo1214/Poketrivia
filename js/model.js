"use strict";

class Pokemon {

    constructor (id, name) {
        this.name = name;
        this.id = id;
        // Para que no haya errores al tomar la imagen se usa la funcion .padStart para rellenar con "0" el string hasta que alcance una longitud de 3 caracteres.
        this.thumbnail = `https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/${id.toString().padStart(3, "0")}.png`;
    }
    
}
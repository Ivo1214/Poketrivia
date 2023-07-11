"use strict";

function Pokemon (id, name) {
    this.name;
    this.id;
    this.thumbnail;
};

Pokemon.prototype.constructor = function (id, name) {
    this.name = name;
    this.id = id;
    this.thumbnail = `https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/${id}.png`;
}
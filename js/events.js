

const send = document.getElementById('send')
const reload = document.getElementById('reload')

function agregarEventos() {

  reload.onclick = () => restart();

  send.onclick = () => {
    let nombreIngresado = document.getElementById("input").value;

    if (nombreIngresado === "") {
        throw new Error("No se ingreso ningun nombre.");
    }
    else {
        cantidadEncuestados = sessionStorage.getItem('cantidadEncuestados');
        cantidadEncuestados++;
        sessionStorage.setItem('cantidadEncuestados',cantidadEncuestados);

        nombreIngresado.toLowerCase();
        if (nombreIngresado === pokemon.name.toLowerCase()){
            document.getElementById("resultText").innerText = "Es correcto!";
            document.getElementById("imgpokemon").classList.add("success");

            cantidadAcertados = sessionStorage.getItem('cantidadAcertados');
            cantidadAcertados++;
            sessionStorage.setItem('cantidadAcertados',cantidadAcertados);
            buscarPokemon ();
            document.getElementById("skills-description").style = "";
        }
        else {
            document.getElementById("resultText").innerText = "Es incorrecto!";
        }
        cargarPuntaje ();
    }
}
}
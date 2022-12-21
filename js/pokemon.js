function cargaJuego(){
    let botonMascotaJugador = document.getElementById('seleccionar_pkmn') 
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let inputBlastoise = document.getElementById('blastoise')
    let inputCharizard = document.getElementById('charizard')
    let inputVenasaur = document.getElementById('venasaur')

    if (inputBlastoise.checked){
        alert('seleccionaste a blastoise')
    } else if (inputCharizard.checked){
        alert('seleccionaste a charizard')
    } else if (inputVenasaur.checked){
        alert('seleccionaste a venasaur')
    } else {
        alert('selecciona un pokemon antes de atacar')
    }
}

window.addEventListener('load', cargaJuego)
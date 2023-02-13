let ataquejugador 
let ataquePc 

function cargaJuego(){
    let botonMascotaJugador = document.getElementById('seleccionar_pkmn') 
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let btnFuego = document.getElementById('seleccionar_fuego')
    btnFuego.addEventListener('click' , ataqueFuego)
    let btnAgua= document.getElementById('seleccionar_agua')
    btnAgua.addEventListener('click' , ataqueAgua)
    let btnPlanta= document.getElementById('seleccionar_planta')
    btnPlanta.addEventListener('click' , ataquePlanta)
}

function seleccionarMascotaJugador() {
    let inputBlastoise = document.getElementById('blastoise')
    let inputCharizard = document.getElementById('charizard')
    let inputVenasaur = document.getElementById('venasaur')
    let spanPokemon = document.getElementById('nomPokemon')

    if (inputBlastoise.checked){
        spanPokemon.innerHTML='Blastoise'
    } else if (inputCharizard.checked){
        spanPokemon.innerHTML='Charizard'
    } else if (inputVenasaur.checked){
        spanPokemon.innerHTML='Venasaur'
    } else {
        alert('selecciona un pokemon antes de atacar')
    }
 
    seleccionarMascotaPc()

}

function seleccionarMascotaPc() {
    let rand = random(3,1)
    let spanPokemonPc= document.getElementById('nomPokemonEne')
    if (rand == 1) {
        spanPokemonPc.innerHTML='Blastoise'
    }else if (rand == 2) {
        spanPokemonPc.innerHTML='Charizard'
    }else {
        spanPokemonPc.innerHTML='Venasaur'
    }

}

function random(max, min){
    //Funcion para numero aleatorio
            return Math.floor(Math.random()*(max-min+1)+min)
        }

function ataqueFuego() {
    ataquejugador='FUEGO'
    ataqueApc()
}

function ataqueAgua() {
    ataquejugador='AGUA'
    ataqueApc()
}  
     
function ataquePlanta() {
    ataquejugador='PLANTA'
    ataqueApc()
}

function ataqueApc() {
    let ataquerand
    ataquerand = random(3,1)

    if (ataquerand==1) {
        ataquePc='FUEGO'
    }else if (ataquerand == 2) {
        ataqueApc ='AGUA'
    }else {
        ataqueApc ='PLANTA'
    }
    
}
        
    

window.addEventListener('load', cargaJuego)
var mapa = document.getElementById('mapa')


function getLocation(){
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(muestraPosicion);

}


}

function muestraPosicion(posicion){
    console.log(posicion)
    mapa.innerHTML = `Latitud: ${posicion.coords.latitude}, Longitude: ${posicion.coords.longitude}`
}
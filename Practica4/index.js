var mapa = document.getElementById('mapa')


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(muestraPosicion);
    }
}

function muestraPosicion(posicion) {
    let coordenadas = {x:posicion.coords.latitude,y:posicion.coords.longitude}
    console.log(coordenadas);
    let imagenMapa = document.getElementById('imagenmapa')
    imagenMapa = `https://maps.googleapis.com/maps/api/staticmap?center=${coordenadas.x},${coordenadas.y}&zoom=18&size=800x800&key=AIzaSyCMrQgga-C5zCuZLTVk2MPVzX7naqKZXZU`
}
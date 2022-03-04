var navegador = document.getElementById('navegador')

var datos = navegador.getElementsByTagName('li')

function obtenerDatos(){
datos[0].innerHTML =`El navegador es ${navigator.appCodeName}`
datos[1].innerHTML =`El navegador es ${navigator.appVersion}`
datos[2].innerHTML =`El navegador es ${navigator.onLine}`
datos[3].innerHTML =`El navegador es ${navigator.platform}`
}
var navegador = document.getElementById('navegador')

var datos = navegador.getElementsByTagName('li')

function obtenerDatos(){
datos[0].innerHTML = navigator.appCodeName
datos[1].innerHTML = navigator.appVersion
datos[2].innerHTML ='Conexión: '+ navigator.onLine
datos[3].innerHTML = 'Plataforma: ' + navigator.platform
}
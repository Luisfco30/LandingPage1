function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(initMap);
    }
}
function initMap(posicion) {
    getLocation()
    console.log(posicion);
    const ubi = { lat: posicion.coords.latitude, lng: posicion.coords.longitude };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: ubi,
    });
    const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Ubicación</h1>' +
        '<div id="bodyContent">' +
        'Mi ubicación actual'+
        "</div>" +
        "</div>";
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });
    const marker = new google.maps.Marker({
        position: ubi,
        map,
        title: "Mi ubicación",
    });

    marker.addListener("click", () => {
        infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
        });
    });
}

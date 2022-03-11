function initMap() {
    let latitude
    let longitude
    navigator.geolocation.getCurrentPosition(x => {
        latitude = x.coords.latitude
        longitude = x.coords.longitude
    })
    const uluru = { lat:latitude, lng:longitude };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Mi ubi</h1>' +
        '<div id="bodyContent">' +
        'aquí estoy'+
        "</div>" +
        "</div>";
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });
    const marker = new google.maps.Marker({
        position: uluru,
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

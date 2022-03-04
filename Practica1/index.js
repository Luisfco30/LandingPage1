function iniciaMapa() {

    console.log('ssssssssssssssss');
    const coordenadas = { lat: 21.15248864620057, lng: -101.71143662175085 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: coordenadas,
    });

    const marker = new google.maps.Marker({
        position: coordenadas,
        map: map,
    });
}
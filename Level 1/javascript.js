

//Coordenadas iniciales centradas, y zoom
var mymap = L.map('mapid').setView([41.3868463,2.1705621], 16); 

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    maxZoom: 19,
    minZoom: 12,
    attribution: '&copy; <a href="https://www.openstreetmap.org.copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);



// Marcador Calle Balmes 16
var marker = L.marker([41.3871076867213, 2.166022941836958]).addTo(mymap);


// Tooltip marcador
marker.bindPopup("<b>Restaurant Centfocs</b><br><br>Restaurante mediterráneo<br>Carrer de Balmes, 16, 08007 Barcelona").openPopup();





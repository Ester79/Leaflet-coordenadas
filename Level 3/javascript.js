

//Icono marcador personalizado
var myIcon = L.icon ({
    iconUrl: 'imagen/icono.png',
    iconSize: [40,40],
    popupAnchor: [-1, -20], //posicion bajo el tooltip
});


//coordenadas y zoom inicials
var mymap = L.map('mapid').setView([41.3868463,2.1705621], 16); 

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org.copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);



// Marcador Calle Balmes 16
let marker = L.marker([41.3871076867213, 2.166022941836958], {icon:myIcon}).addTo(mymap);


// Tooltip
marker.bindPopup("<b>Restaurant Centfocs</b><br><br>Restaurante mediterráneo<br>Carrer de Balmes, 16, 08007 Barcelona").openPopup();



// Función obtener latitud al hacer click en cualquier parte del mapa. 
function onMapClick(e){

    let texto;
    //Condición que solamente se muestra un marcador en el mapa cada vez
    if(mymap.hasLayer(marker)){
        mymap.removeLayer(marker);
    }
    marker = L.marker(e.latlng, {icon:myIcon}); //Especificar icono personalizado
    texto = "<b>Las coordenadas son:</b><br><br> Lat: "  + e.latlng.lat + " Lng: " + e.latlng.lng;  
    
    marker.bindPopup(texto);
    mymap.addLayer(marker);
    marker.openPopup();
}
mymap.on('click', onMapClick);






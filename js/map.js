var map = L.map('map').setView([37.00508, -121.57268], 18);

var myIcon = L.icon({
    iconUrl: '/img/leaflet/marker-icon.png'
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker = L.marker([37.00529, -121.572764], {icon: myIcon}).addTo(map)

L.popup().setLatLng([37.00529, -121.572697]).setContent('<h3 style="text-align: center">Gilroy Library</h3><br>350 W 6th St, Gilroy, CA 95020')
    .openOn(map);

// var circle = L.circle([37.00508, -121.57268], {
//     color: 'blue',
//     fillColor: '#6393c4d2',
//     fillOpacity: 0.5,
//     radius: 50
// }).addTo(map)
// .bindPopup('<h3 style="text-align: center">Gilroy Library</h3><br>350 W 6th St, Gilroy, CA 95020')
//     .openPopup();
var map = L.map('sustainmap').setView([52.1147, 8.6696], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// draw an example circle, values will be filled from sdg-data as soon
// as the interface is specified
var circle = L.circle([52.1147, 8.6696], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
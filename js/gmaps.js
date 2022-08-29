var map = new GMaps({
    div: '#map',
    lat: -12.043333,
    lng: -77.028333
});

map.addMarker({
  lat: -12.043333,
  lng: -77.028333,
  title: 'Lima',
  click: function(e) {
    alert('You clicked in this marker');
  }
});
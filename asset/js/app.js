function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(-6.880138, 106.811095),
    zoom: 15,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
  };
  var map = new google.maps.Map(mapCanvas ,mapOptions);
}


$('.carousel').carousel({
    pause: "false"
});

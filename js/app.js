function initMap() {
  var mapDiv = document.querySelector('.contacts__map');
  var myLatLng = {lat: 59.938796, lng: 30.323070};
  var map = new google.maps.Map(mapDiv, {
    center: myLatLng,
    zoom: 16
  });
  var image = "../img/icon-map-pin.svg";
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}

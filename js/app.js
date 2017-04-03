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

var nav = document.querySelector('.page-nav');
var toggle = document.querySelector('.page-nav__toggle');

nav.classList.remove('page-nav--nojs');

toggle.addEventListener('click', function() {
  if (nav.classList.contains('page-nav--close')) {
        nav.classList.remove('page-nav--close');
        nav.classList.add('page-nav--open');
      } else {
        nav.classList.add('page-nav--closed');
        nav.classList.remove('page-nav--open');
      }
});


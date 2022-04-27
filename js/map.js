var container = document.getElementById('map'),
    options = {
         center: new kakao.maps.LatLng(37.5850969086744, 126.9248570657878),
         level: 3
    };
var map = new kakao.maps.Map(container, options);

container.style.width = '500px';
container.style.height = '400px';

map.relayout();
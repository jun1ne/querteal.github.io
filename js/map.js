var container = document.getElementById('map'),
    options = {
         center: new kakao.maps.LatLng(33.450701, 126.570667),
         level: 3
    };
var map = new kakao.maps.Map(container, options);

container.style.width = '1200px';
container.style.height = '800px';

map.relayout();
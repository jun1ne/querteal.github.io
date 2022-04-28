var container = document.getElementById('map'),
    options = {
         center: new kakao.maps.LatLng(37.5850969086744, 126.9248570657878),
         level: 3
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

function relayout() {    
    map.relayout();
}
//map.setCenter(new DocumentFragment.maps.LatLng(37.5850969086744, 126.9248570657878))

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.5850969086744, 126.9248570657878); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

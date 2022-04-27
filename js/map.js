var container = document.getElementById('map');
var options = {
  center: new kakao.maps.LatLng(37.585135, 126.924890),
  level: 3
};

// 지도 생성
var map = new kakao.maps.Map(mapContainer, mapOption);
// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();
// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// daum.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
// 마커
var marker = new kakao.maps.Marker({
map: map,
// 지도 중심좌표에 마커를 생성
position: map.getCenter()
});
marker.setMap(map);
//마커를 기준으로 가운데 정렬이 될 수 있도록 추가
var markerPosition = marker.getPosition(); 
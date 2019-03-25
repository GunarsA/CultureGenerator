var map;
var infowindow;
var markers = [];
function update(){
	var libraries_bool = true;
	if(libraries_bool===true){
		dropPins(libraries,"library_resized.png");
	}
	
}

function initMap() {
	var myLatlng = new google.maps.LatLng(56.946285,24.105078);
	var mapOptions = {
		zoom: 8,
		center: myLatlng
	};
	map = new google.maps.Map(document.getElementById('map'), mapOptions);
	infowindow =new google.maps.InfoWindow();
	update();
}

function setContent(marker, location, infowindow){
	return function() {
		infowindow.setContent(location.Name);
		infowindow.open(map, marker);
	};
}
function addMarker(location,img) {
	var myLatlng = new google.maps.LatLng(location.LAT, location.LON);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
		icon: img
    });
    markers.push(marker);
	google.maps.event.addListener(marker, 'click', setContent(marker, location,infowindow));
}
function dropPins(allPoints,img){
	for (var i = 0; i < allPoints.length; i++){
		addMarker(allPoints[i],img);  
	}
	var markerClusterer = new MarkerClusterer(map, markers,{imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}
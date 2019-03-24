var map;
var infowindow;
var markers = [];

function update(){
	for(var i=0;i<markers.length;i++){
		markers[i].setMap(null);
	}
	var museums_bool = document.getElementById("museums_checkbox").checked;
	if(museums_bool===true){
		dropPins(museums);
	}
	var libraries_bool = document.getElementById("libraries_checkbox").checked;
	if(libraries_bool===true){
		dropPins(libraries);
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
function addMarker(location) {
	var myLatlng = new google.maps.LatLng(location.LAT, location.LON);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
		icon: "assets/img/library_resized.png"
    });
    markers.push(marker);
	google.maps.event.addListener(marker, 'click', setContent(marker, location,infowindow));
}
function dropPins(allPoints){
	for (var i = 0; i < allPoints.length; i++){
		addMarker(allPoints[i]);  
	}
}
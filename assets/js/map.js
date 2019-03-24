var map;
var infowindow;
var markers = [];

function update(){
	for(var i=0;i<markers.length;i++){
		markers[i].setMap(null);
	}
	var museums_bool = document.getElementById("museums_checkbox").checked;
	if(museums_bool===true){
		dropPins(museums,"assets/img/museum_resized.png");
	}
	var libraries_bool = document.getElementById("libraries_checkbox").checked;
	if(libraries_bool===true){
		dropPins(libraries,"assets/img/library_resized.png");
	}
	
}

function initMap() {
	var myLatlng = new google.maps.LatLng(56.946285,23.917078);
	var mapOptions = {
		zoom:7.96,
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
}
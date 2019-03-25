var map;
var infowindow;
var markers = [];
var types = [
	//index 0 -> bibliotēka
	//index 1 -> muzejs
	{
		Name: "Bibliotēka",
		Color: "Orange",
		Location_image: "assets/img/orange_circle_resized.png",
		Name_specified: true,
		Address_specified: true,
		CEO_specified: true,
		Year_specified: true,
		Mission_specified: true,
		Additional_information_specified: true,
		Handicapped_specified: true,
		Active_users_specified: true,
		Collections_specified: true,
		WiFi_specified: true
	},
	{
		Name: "Muzejs",
		Color: "Red",
		Location_image: "assets/img/museum_resized.png",
		Name_specified: true
	}
 ]
function update(){
	for(var i=0;i<markers.length;i++){
		markers[i].setMap(null);
	}
	var museums_bool = document.getElementById("museums_checkbox").checked;
	if(museums_bool===true){
		dropPins(museums,types[1]);
	}
	var libraries_bool = document.getElementById("libraries_checkbox").checked;
	if(libraries_bool===true){
		dropPins(libraries,types[0]);
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

function setContent(marker, location, infowindow, Location_type){
	return function() {
		var stringVar="<ul>";
		if(Location_type.Name_specified==true){
			stringVar+="<li>"+location.Name+"</li>";
		}
		stringVar+="</ul>";
		infowindow.setContent(stringVar);
		infowindow.open(map, marker);
	};
}
function addMarker(location,Location_type) {
	var myLatlng = new google.maps.LatLng(location.LAT, location.LON);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
		icon: Location_type.Location_image
    });
    markers.push(marker);
	google.maps.event.addListener(marker, 'click', setContent(marker, location,infowindow));
}
function dropPins(allPoints,Location_type){
	for (var i = 0; i < allPoints.length; i++){
		addMarker(allPoints[i],Location_type);  
	}
	var markerClusterer = new MarkerClusterer(map, markers,{imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}
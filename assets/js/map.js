var map;
function update(){
	dropPins(libraries);
}
function initMap() {
	// lat lng
	var myLatlng = new google.maps.LatLng(56.946285,24.105078);
	var mapOptions = {
		zoom: 7.5,
		center: myLatlng
	};
	map = new google.maps.Map(document.getElementById('map'), mapOptions);
	update();
}
function sayHi(){
		alert("hi");
}
function setContent(marker, x,infowindow){
	return function() {
		infowindow.setContent(x.Name);
		infowindow.open(map, marker);
	};
}
function dropPins(allPoints){
	var infowindow = new google.maps.InfoWindow(); 
	for (var i = 0; i < allPoints.length; i++){
		var myLatlng = new google.maps.LatLng(parseFloat(allPoints[i].LAT), parseFloat(allPoints[i].LON));
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: "assets/img/library_resized.png"
		});
		google.maps.event.addListener(marker, 'click', setContent(marker, allPoints[i],infowindow));  
	}
}
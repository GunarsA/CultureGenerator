function initMap() {
	var myLatlng = new google.maps.LatLng(56.946285,24.105078);
	var mapOptions = {
		zoom: 7.5,
		center: myLatlng
	};
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);
	dropPins(libraries, map);
}
function sayHi(){
		alert("hi");
}
function dropPins(allPoints, map){
	var infowindow = new google.maps.InfoWindow(); 
	for (var i = 0; i < allPoints.length; i++){
		var myLatlng = new google.maps.LatLng(parseFloat(allPoints[i].LAT), parseFloat(allPoints[i].LON));
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: "assets/img/library_resized.png",
			animation: google.maps.Animation.DROP
		});
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
		return function() {
		infowindow.setContent(allPoints[i].Name);
		infowindow.open(map, marker);
		};
		})(marker, i));  
	}
}

//RIGA  new google.maps.LatLng(56.946285,24.105078)

function initialize() {
	var myLatlng = new google.maps.LatLng(56.946285,24.105078);
	var mapOptions = {
		zoom: 7.5,
		center: myLatlng
	};
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);
	dropPins(bibs, map);
}

function dropPins(allPoints, map){
	alert("hi");
	var infowindow = new google.maps.InfoWindow(); 
	for (var i = 0; i < allPoints.length; i++){
		var myLatlng = new google.maps.LatLng(parseFloat(allPoints[i].LAT), parseFloat(allPoints[i].LON));
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: "library2.png",
			animation: google.maps.Animation.DROP
		});
	}
}
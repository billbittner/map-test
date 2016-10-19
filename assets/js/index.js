//create a list of markers
		var markerList = [
			{
				name: 'home', 
				location: {lat: 34.082517, lng: -118.280028}, 
				text: 'test text'
			},
			{
				name: 'night market + song', 
				location: {lat: 34.086907, lng: -118.275843}, 
				text: 'test text'
			}
		];

		function findLocation(text) {
			//take in text, 
			//return a location
		};

		function assignLocation() {
			//loop over the markers
			//add the location to the marker
		};

		function initMap() {
			//declare variables
			var map;
			var mapCenter = {lat: 34.082517, lng: -118.280028};
			var marker
			//create the info window
			var infowindow = new google.maps.InfoWindow(); 
			//create a map
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 13,
				center: mapCenter
			});
			//place the markers from the list
			for (var i = 0; i < markerList.length; i++) {
				//create the marker
				marker = new google.maps.Marker({
					position: markerList[i].location,
					map: map,
					title: markerList[i].name
				});
				//assign the infowindow to the marker
				google.maps.event.addListener(marker, 'click', (function(marker, i) {
					return function(){
						infowindow.open(map, marker);
						infowindow.setContent(markerList[i].name)
					}
				})(marker, i));
			};
		};
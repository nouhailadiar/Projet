<script>

	var map = L.map('map').setView([33.972213, -6.867534], 15);

	var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	var marker = L.marker([33.976838, -6.865962]).addTo(map)
		.bindPopup('<b>Hello world!</b><br />Département Topo.').openPopup();
	var marker = L.marker([33.972213, -6.867534]).addTo(map)
		.bindPopup('<b>Hello world!</b><br />Apesa').openPopup();

	var greenIcon = L.icon({
         iconUrl: 'D://Test//icons8-cv-16.png',
    	   shadowUrl: 'D://Test//icons8-cv-16.png',

         iconSize:     [38, 95], // size of the icon
         shadowSize:   [50, 64], // size of the shadow
         iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
         shadowAnchor: [4, 62],  // the same for the shadow
         popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      });
      L.marker([33.976838, -6.865962], {icon: greenIcon}).addTo(map);
	var polygon = L.polygon([
		[33.970326, -6.866519],
		[33.973612, -6.871697],
		[33.981620, -6.863982],
		[33.980671, -6.860755]
	]).addTo(map).bindPopup('IAV HASSAN II.');


	var popup = L.popup()
		.setLatLng([33.972213, -6.867534])
		.setContent('APESA.')
		.openOn(map);

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent('You clicked the map at ' + e.latlng.toString())
			.openOn(map);
	}

	map.on('click', onMapClick);

</script>
 $(document).ready(function (){

    function initialize() {

    	var myCoords = new google.maps.LatLng(latitude, longitude)
      var mapOptions = {
      center: myCoords,
      zoom: 10,
      scrollwheel: false
      };
       
      var map = new google.maps.Map(document.getElementById('destination-map'),
                mapOptions);    
      // var icon = {
      // 	// url: "https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1418130563/n7o0zufezp39vpssekvj.png",
      // 	url: "<%= asset_path 'download.png'%>",
      // 	scaledSize: new google.maps.Size(50,50)
      // };

      var marker = new google.maps.Marker({
      	position: myCoords, 
      	map: map,
      	title: 'Strongbox West',
      	animation: google.maps.Animation.DROP
      });

      var contentString = '<h2>' +'</h2>';

			 var infowindow = new google.maps.InfoWindow({
			   content: contentString
			 });

			 google.maps.event.addListener(marker, 'click', function() {
			    infowindow.open(map,marker);
			 });
    }
      
    google.maps.event.addDomListener(window, 'load', initialize);
});
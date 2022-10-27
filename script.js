function initMap(){
    var coord = {lat:-34.5710268,lng: -58.4877011};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 15,
      center: coord
    });

    var infowindow = new google.maps.InfoWindow({
      content: "Add your popup content here"
    });

    const marker = new google.maps.Marker({
      position: coord,
      map: map
    });

    
    }


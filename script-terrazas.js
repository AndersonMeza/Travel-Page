function iniciarMapTerr(){
    var coord = {lat: 35.057005, lng: 113.956053};
    var map = new google.maps.Map(document.getElementById("map"),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
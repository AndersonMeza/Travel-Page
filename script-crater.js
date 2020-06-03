function iniciarMap(){
    var coord = {lat:21.2777444 ,lng: -89.5099434};
    var map = new google.maps.Map(document.getElementById("map"),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
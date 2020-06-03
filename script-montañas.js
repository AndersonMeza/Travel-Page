function iniciarMap(){
    var coord = {lat: 38.921353, lng: 100.1278298};
    var map = new google.maps.Map(document.getElementById("map"),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
function iniciarMapPocheon(){
    var coord = {lat:37.9249407, lng:1127.2443529};
    var map = new google.maps.Map(document.getElementById("map"),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
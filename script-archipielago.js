function iniciarMapArch(){
    var coord = {lat: 47.013247, lng: -90.691361};
    var map = new google.maps.Map(document.getElementById("map"),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
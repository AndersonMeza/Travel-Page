function iniciarMapDar(){
    var coord = {lat: 40.273562, lng: 58.440382};
    var map = new google.maps.Map(document.getElementById("map"),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
function iniciarMapCascada(){
    var coord = {lat:-0.9938, lng:-77.81286};
    var map = new google.maps.Map(document.getElementById("map"),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
function iniciarMapPR(){
    var coord = {lat:35.86166, lng:104.1953964};
    var map = new google.maps.Map(document.getElementById("map"),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
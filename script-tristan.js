function iniciarMap(){
    var coord = {lat:-37.1131073 ,lng: -12.3247372};
    var map = new google.maps.Map(document.getElementById("map"),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
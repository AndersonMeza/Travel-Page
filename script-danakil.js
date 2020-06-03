function iniciarMap(){
    var coord = {lat: 14.3815328, lng: 40.304712};
    var map = new google.maps.Map(document.getElementById("map"),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
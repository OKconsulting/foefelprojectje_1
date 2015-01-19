function initialize() {
    var mapOptions = {
        center: { lat: 50.919812134690694, lng: 3.1733993769739754 },
        zoom: 16
    }

    var map = new google.maps.Map(document.getElementById('myGoogleMap'), mapOptions);

    var latLng = new google.maps.LatLng('50.919812134690694', '3.1733993769739754');
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: 'OKc'
    });
}
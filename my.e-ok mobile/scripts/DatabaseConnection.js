// Bepalen welke url gebruikt moet worden
var url;

if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
    url = "http://api.okc.be/myeok_2/";

    var vandaag = new Date();
    if (vandaag >= new Date(2015, 4, 18, 0, 0, 0, 0)) {
        url = "http://api.okc.be/myeok/";
    }

    // "http://api.okc.be/myeok_2/"; -- Test API
    // "http://192.168.2.11:50681/"; --> Lokaal
    // "http://api.okc.be/myeok/"; --> Live API
}
else {
    url = "http://localhost:50681/";
}
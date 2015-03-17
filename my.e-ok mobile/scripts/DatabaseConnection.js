// Bepalen welke url gebruikt moet worden
var url;

if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
    url = "http://192.168.2.16:50681/";

    // "http://api.okc.be/myeok_2/"; -- Nieuwe API
    // "http://192.168.2.11:50681/"; --> Lokaal
    // "http://api.okc.be/myeok/"; --> Oude API
}
else {
    url = "http://localhost:50681/";
}
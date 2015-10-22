// Bepalen welke url gebruikt moet worden
var url;

if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
    url = "http://api.okc.be/myeok_2/";
}
else {
    url = "http://api.okc.be/myeok_2/";
}
// "http://api.okc.be/myeok_2/";
// "http://192.168.2.125:50681/";
// "http://localhost:50681/";
// "http://api.okc.be/myeok/";
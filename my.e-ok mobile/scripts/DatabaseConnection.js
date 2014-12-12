// Bepalen welke url gebruikt moet worden
var url;

if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
    url = "http://api.okc.be/myeok/";
} else {
    url = "http://api.okc.be/myeok/";//"http://localhost:47493/";
}
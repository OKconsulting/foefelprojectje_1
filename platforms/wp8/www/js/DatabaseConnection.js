// Bepalen welke url gebruikt moet worden
var url;

function determineUrl() {
    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {

        url = "http://api.okc.be/myeok/";
    }
    else {
        url = "http://localhost:50681/";
    }
}
determineUrl();
// "http://api.okc.be/myeok_2/";
// "http://192.168.2.125:50681/";
// "http://localhost:50681/";
// "http://api.okc.be/myeok/";
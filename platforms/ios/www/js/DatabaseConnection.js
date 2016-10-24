// Bepalen welke url gebruikt moet worden
var url;

function determineUrl() {
    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
        url = "http://api.okc.be/myeok/";
    }
    else {
        url = "http://api.okc.be/myeok/";
    }
}
determineUrl();
// "http://api.okc.be/myeok_2/";        // Test
// "http://192.168.2.125:58206/";       // Toestel
// "http://localhost:58206/";           // Lokaal
// "http://api.okc.be/myeok/";          // Live
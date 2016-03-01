// Bepalen welke url gebruikt moet worden
var url;

function determineUrl() {
    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
        url = "http://192.168.2.125:50681/";
    }
    else {
        url = "http://192.168.2.125:50681/";
    }
}
determineUrl();
// "http://api.okc.be/myeok_2/";        // Test
// "http://192.168.2.125:50681/";       // Toestel
// "http://localhost:50681/";           // Lokaal
// "http://api.okc.be/myeok/";          // Live
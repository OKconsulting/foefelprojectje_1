var url;

if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
    url = "http://api.okc.be/";
} else {
    url = "http://localhost:47493/";
}
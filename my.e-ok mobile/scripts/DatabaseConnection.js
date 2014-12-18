// Bepalen welke url gebruikt moet worden
var url;

if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/))
    url = "http://192.168.2.14:50681/"; //"http://192.168.2.14/Myeok.mobile.API/"; //"http://api.okc.be/myeok/";
else
    url = "http://localhost:47493/";

$.ajax({
    headers: { 'Access-Control-Allow-Origin': "*" },
    url: url + 'api/user/getApiLocation/?versieNr=14.4.2',
    cache: false,
    async: false,
    type: 'GET',
    contentType: 'application/json; charset=utf-8',
    success: function (data) {
        if (data != '')
            url = data;
    }
});
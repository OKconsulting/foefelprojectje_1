﻿// Bepalen welke url gebruikt moet worden
var url;

if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/))
    url = "http://192.168.2.14:50681/"; //"http://api.okc.be/myeok/";
else
    url = "http://localhost:50681/";
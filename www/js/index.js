/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
		document.addEventListener("backbutton", this.backButtonDown, false);
    },
    onDeviceReady: function () {
        var mdwID = window.localStorage.getItem("mdwID");
        var miRol = window.localStorage.getItem("miRol");
        $('#login').css('background-color', 'red');

        if (mdwID != null && miRol != null) {
            $.ajax({
                headers: { 'Access-Control-Allow-Origin': "*" },
                url: url + 'api/User/getVersionInfo/?apiVersion=' + APIVersion,
                cache: false,
                type: 'GET',
                contentType: 'application/json; charset=utf-8',
                success: function (data) {
                    window.location.href = "./home.html#home";
                },
                error: function (e) {
                    if (e.responseJSON == undefined || e.responseJSON == null)
                        melding("U heeft geen internet connectie.", 3000, 'error');
                    else
                        melding(e.responseJSON, 5000, 'error');
                }
            });
        }
    },
	backButtonDown: function() {
		e.preventDefault();
		navigator.app.exitApp();
	}
};
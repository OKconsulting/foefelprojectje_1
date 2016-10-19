﻿cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "org.apache.cordova.dialogs.notification",
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "pluginId": "org.apache.cordova.dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "org.apache.cordova.dialogs.NotificationProxy",
        "file": "plugins/org.apache.cordova.dialogs/src/windows/NotificationProxy.js",
        "pluginId": "org.apache.cordova.dialogs",
        "merges": [
            ""
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "org.apache.cordova.dialogs": "0.3.0"
};
// BOTTOM OF METADATA
});
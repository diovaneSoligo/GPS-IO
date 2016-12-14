cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-background-app.backgroundapp",
        "file": "plugins/cordova-plugin-background-app/backgroundapp.js",
        "pluginId": "cordova-plugin-background-app",
        "clobbers": [
            "cordova.backgroundapp"
        ]
    },
    {
        "id": "cordova-plugin-chrome-apps-common.events",
        "file": "plugins/cordova-plugin-chrome-apps-common/events.js",
        "pluginId": "cordova-plugin-chrome-apps-common",
        "clobbers": [
            "chrome.Event"
        ]
    },
    {
        "id": "cordova-plugin-chrome-apps-common.errors",
        "file": "plugins/cordova-plugin-chrome-apps-common/errors.js",
        "pluginId": "cordova-plugin-chrome-apps-common"
    },
    {
        "id": "cordova-plugin-chrome-apps-common.stubs",
        "file": "plugins/cordova-plugin-chrome-apps-common/stubs.js",
        "pluginId": "cordova-plugin-chrome-apps-common"
    },
    {
        "id": "cordova-plugin-chrome-apps-common.helpers",
        "file": "plugins/cordova-plugin-chrome-apps-common/helpers.js",
        "pluginId": "cordova-plugin-chrome-apps-common"
    },
    {
        "id": "cordova-plugin-chrome-apps-storage.Storage",
        "file": "plugins/cordova-plugin-chrome-apps-storage/storage.js",
        "pluginId": "cordova-plugin-chrome-apps-storage",
        "clobbers": [
            "chrome.storage"
        ]
    },
    {
        "id": "cordova-plugin-chrome-apps-alarms.Alarms",
        "file": "plugins/cordova-plugin-chrome-apps-alarms/alarms.js",
        "pluginId": "cordova-plugin-chrome-apps-alarms",
        "clobbers": [
            "chrome.alarms"
        ]
    },
    {
        "id": "cordova-plugin-chrome-apps-runtime.app.runtime",
        "file": "plugins/cordova-plugin-chrome-apps-runtime/api/app/runtime.js",
        "pluginId": "cordova-plugin-chrome-apps-runtime",
        "clobbers": [
            "chrome.app.runtime"
        ]
    },
    {
        "id": "cordova-plugin-chrome-apps-runtime.runtime",
        "file": "plugins/cordova-plugin-chrome-apps-runtime/api/runtime.js",
        "pluginId": "cordova-plugin-chrome-apps-runtime",
        "clobbers": [
            "chrome.runtime"
        ]
    },
    {
        "id": "cordova-plugin-chrome-apps-runtime.CryptoJS-sha256",
        "file": "plugins/cordova-plugin-chrome-apps-runtime/lib/CryptoJS/sha256.js",
        "pluginId": "cordova-plugin-chrome-apps-runtime"
    },
    {
        "id": "cordova-plugin-chrome-apps-runtime.CryptoJS-enc-base64-min",
        "file": "plugins/cordova-plugin-chrome-apps-runtime/lib/CryptoJS/enc-base64-min.js",
        "pluginId": "cordova-plugin-chrome-apps-runtime"
    },
    {
        "id": "cordova-plugin-chrome-apps-notifications.notifications",
        "file": "plugins/cordova-plugin-chrome-apps-notifications/notifications.js",
        "pluginId": "cordova-plugin-chrome-apps-notifications",
        "clobbers": [
            "chrome.notifications"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.geolocation",
        "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.PositionError",
        "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
        "pluginId": "cordova-plugin-geolocation",
        "runs": true
    },
    {
        "id": "cordova-plugin-network-information.network",
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "id": "cordova-plugin-network-information.Connection",
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "id": "cordova-plugin-sqlite.SQLitePlugin",
        "file": "plugins/cordova-plugin-sqlite/www/SQLitePlugin.js",
        "pluginId": "cordova-plugin-sqlite",
        "clobbers": [
            "window.sqlitePlugin",
            "cordova.plugins.sqlitePlugin"
        ]
    },
    {
        "id": "cordova-plugin-vibration.notification",
        "file": "plugins/cordova-plugin-vibration/www/vibration.js",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator.notification",
            "navigator"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-background-app": "2.0.2",
    "cordova-plugin-chrome-apps-common": "1.0.7",
    "cordova-plugin-chrome-apps-storage": "1.0.4",
    "cordova-plugin-chrome-apps-alarms": "1.3.3",
    "cordova-plugin-chrome-apps-runtime": "1.1.1",
    "cordova-plugin-chrome-apps-notifications": "1.3.1",
    "cordova-plugin-compat": "1.0.0",
    "cordova-plugin-geolocation": "2.4.0",
    "cordova-plugin-network-information": "1.3.0",
    "cordova-plugin-sqlite": "1.0.3",
    "cordova-plugin-vibration": "2.1.2",
    "cordova-plugin-whitelist": "1.3.0"
};
// BOTTOM OF METADATA
});
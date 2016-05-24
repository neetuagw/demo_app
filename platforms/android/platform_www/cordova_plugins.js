cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.estimote.sdk/www/estimote.js",
        "id": "com.estimote.sdk.estimote",
        "pluginId": "com.estimote.sdk",
        "clobbers": [
            "estimote"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "com.estimote.sdk": "1.1.1"
}
// BOTTOM OF METADATA
});
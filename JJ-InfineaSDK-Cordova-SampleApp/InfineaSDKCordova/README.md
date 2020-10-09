# InfineaSDKCordova

Prepare plugin:
1) Download InfineaSDK.framework from IPC's developer portal https://developer.ipcmobile.com
2) Copy InfineaSDK.framework to src/ios/ of the plugin

New app:
1) Create new app
2) Add iOS platform
3) Add InfineaSDKCordova plugin
4) Copy build.json from plugin's root to new app's root folder
5) Build your app.

Usage:
1) Important: request a developer key from IPC's developer portal https://developer.ipcmobile.com
2) In the app set the developer key BEFORE calling any other functions
`Infinea.setDeveloperKey("your_key");`
3) Check out InfineaSDKCordova.js for available functions.
4) Make sure to add `Infinea.` in front if you call any functions from InfineaSDKCordova.js 




Demo JS:



var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        
        Infinea.setDeveloperKey("Your Developer Key Here");

        // 0 or Empty - Default IPC Behaviour
        // 1 - J&J GS1 HIBC:
        // 2 - J&J GS1:
        // pass connection type as int
        Infinea.connect();
        
        Infinea.barcodeNSData = function(barcode,type){
            alert("Barcode: " + barcode);
        }
    },
    
    

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();



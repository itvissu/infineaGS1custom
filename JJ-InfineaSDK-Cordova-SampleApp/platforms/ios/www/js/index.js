
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

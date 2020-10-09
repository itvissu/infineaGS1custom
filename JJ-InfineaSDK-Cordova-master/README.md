# InfineaSDK-Cordova

## Prerequisites:
* Download InfineaSDK.framework from IPC's developer portal https://developer.ipcmobile.com

## New Cordova app:
1. Create new app
2. Add iOS platform
3. Add InfineaSDKCordova plugin
4. Copy InfineaSDK.framework to src/ios/ of the plugin
5. Copy build.json from plugin's root to new app's root folder
6. Build your app.

## Usage:
1. Important: request a developer key from IPC's developer portal https://developer.ipcmobile.com
2. In the app set the developer key BEFORE calling any other functions `Infinea.setDeveloperKey("your_key");`
3. Check out InfineaSDKCordova.js for available functions.
4. Make sure to add `Infinea.` in front if you call any functions from InfineaSDKCordova.js 

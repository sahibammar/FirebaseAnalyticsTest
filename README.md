# FirebaseAnalyticsTest
The purpose of this project is to test Firebase analytics plugin for Ionic native. Here we are using Capacitor instead of Cordova. The project is tested for Android on a physical Android device.

### Requirements
1. You should have access to a firebase project
2. You should already added an android app to the project and downloaded google-services-json file
3. The package ID you used in the Firebase android app should match with what you will enter when initiating Capacitor, We use here com.firebaseanalytics.test

### Building node_modules:
```
npm install
```
### Adding Android component to the project
```
npx cap init

? App name: FirebaseAnalytics Test
? App Package ID (in Java package format, no dashes): com.firebaseanalytics.test

npm run build
npx cap add android
npx cap copy
npx cap open android 
```
### Installing Firebase analytics plugin for native Ionic using Capacitor: 
```
npm install cordova-plugin-firebase-analytics 
npm install @ionic-native/firebase-analytics
ionic cap sync
```
## What has been changed in scripts:
The required changes are already applied to this project so you dont need to do these changes your self. However if your are interested to know what has been changed, here is a summary:

### Changes to app.module.ts
1. Importing FirebaseAnalytics. To be added to app.module.ts
```
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
```
2. Adding FirebaseAnalytics to providers. To be added to app.module.ts
```
providers: [
	FirebaseAnalytics,
```

### Changes to home.page.ts
1. Importing FirebaseAnalytics.
```
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
```
2. Defining firebaseAnalytics in constructor.
```
  constructor(private firebaseAnalytics: FirebaseAnalytics) {}
```
3. Define a function log() to be called when a button is clicked
```
log() {
 this.firebaseAnalytics.setEnabled(true);
 this.firebaseAnalytics.logEvent('page_view', {page: "dashboard"})
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));
}
```

### Changes to home.page.html
add the following to create a button
```
<ion-button (click) ="log()">Click to log</ion-button>
```

## Troubleshooting:
1. add "linuxAndroidStudioPath": "/home/awitwit/bin/android-studio/bin/studio.sh", to capacitor.config.json 
2. change firebaseMessagingVersion =  '20.1.2' to  firebaseMessagingVersion =  '20.1.6' in android/variables.gradle
3. add google-services.json to android/app

## Notes
to Enable debug view
```
adb shell setprop debug.firebase.analytics.app com.firebaseanalytics.test
```
![alt text](https://github.com/sahibammar/FirebaseAnalyticsTest/raw/master/src/common/images/firebase_dashboard_snapshot.jpg "Logo Title Text 1")

## Open Issues
When running the native andoid app the following message appears. The issue is solved by enabling firebaseAnalytics inside the log()  
```
W/Bundle: Key firebase_analytics_collection_enabled expected Boolean but value was a java.lang.String.  The default value false was returned.
```
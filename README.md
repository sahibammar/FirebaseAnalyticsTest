# FirebaseAnalyticsTest
Firebase analytics plugin test for Ionic native

npx cap init
? App name FirebaseAnalytics Test
? App Package ID (in Java package format, no dashes) com.firebaseanalytics.test

npm run build
npx cap add android
npx cap copy
npx cap open android 

npm install cordova-plugin-firebase-analytics 
npm install @ionic-native/firebase-analytics
ionic cap sync

add to app.module.ts
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
providers: [
	FirebaseAnalytics,

add to home.page.ts
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
  constructor(private firebaseAnalytics: FirebaseAnalytics) {}

log() {
 this.firebaseAnalytics.setEnabled(true);
 this.firebaseAnalytics.logEvent('page_view', {page: "dashboard"})
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));
}


Troubleshooting:
1. add "linuxAndroidStudioPath": "/home/awitwit/bin/android-studio/bin/studio.sh", to capacitor.config.json 
2. change firebaseMessagingVersion =  '20.1.2' to  firebaseMessagingVersion =  '20.1.6' in android/variables.gradle
3. add google-services.json to android/app

to Enable debug view
adb shell setprop debug.firebase.analytics.app com.firebaseanalytics.test

Open Issues:
W/Bundle: Key firebase_analytics_collection_enabled expected Boolean but value was a java.lang.String.  The default value false was returned.

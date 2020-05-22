import { Component } from '@angular/core';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private firebaseAnalytics: FirebaseAnalytics) {

  }

  log() {
    this.firebaseAnalytics.setEnabled(true);
    this.firebaseAnalytics.logEvent('page_view', {page: "dashboard"})
     .then((res: any) => console.log(res))
     .catch((error: any) => console.error(error));
   }

}

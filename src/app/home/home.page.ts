import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';

import { watch } from 'fs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

coords: any;
accuracy: any;
error: any;

  constructor() { }


call(){
this.callNumber.callNumber("18001010101", true)
.then(res => console.log('Launched dialer!', res))
.catch(err => console.log('Error launching dialer', err));
}

watch() {
  Geolocation.getCurrentPosition().then((resp) => {
    this.coords = resp.coords.latitude + ' ' + resp.coords.longitude;
    this.accuracy = resp.coords.accuracy + ' meters';
  }).catch((error) => {
    this.error = 'Error getting location: ' + error;
  })

}
}

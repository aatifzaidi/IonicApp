import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecondPage } from '../second/second';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {


  colors =['primary','secondary','dark','warning'];

  constructor(
    private theInAppBrowser: InAppBrowser,
    private navCtrl: NavController) {

  }

  navigateToSecondPage(): void {
    this.navCtrl.push(SecondPage);
  }

}

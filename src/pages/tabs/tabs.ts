import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CifrarPage } from '../cifrar/cifrar';
import { DecifrarPage } from '../decifrar/decifrar';
import { AboutPage } from '../about/about';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage;
  cifrarRoot = CifrarPage;
  decifrarRoot = DecifrarPage;
  aboutRoot = AboutPage;


  constructor(public navCtrl: NavController) {}

}

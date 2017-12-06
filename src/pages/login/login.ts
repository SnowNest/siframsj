import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

import { UsuariosProvider } from '../../providers/usuarios/usuarios';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: string = "";
  password: string = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _usuario: UsuariosProvider,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {
  }


  logIn() {

    let loading = this.loadingCtrl.create({

      content: "Espere por favor..."

    });

    loading.present();

    if (this.user == "root" && this.password == "root" || this.user == "admin" && this.password == "admin") {

      this._usuario.guardar_storage(this.user);

      this.navCtrl.push(TabsPage).then(() => {

        loading.dismiss();

      }).catch(() => {

        loading.dismiss();

        this.toastCtrl.create({

          message: 'ERROR de inicio se sesión',
          duration: 1500

        }).present();

      });


    }
    else {

      loading.dismiss();

      this.toastCtrl.create({

        message: 'ERROR de inicio se sesión',
        duration: 1500

      }).present();

    }

  }

}

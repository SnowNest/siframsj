import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private _usuario: UsuariosProvider,
    private loadingCtrl: LoadingController) {
  }

  logout() {

    let loading = this.loadingCtrl.create({

      content: "cifrando..."

    });

    loading.present();

    this._usuario.borrar_storage().then( () => {

      window.location.reload(false);
      loading.dismiss();

    });

  }

}

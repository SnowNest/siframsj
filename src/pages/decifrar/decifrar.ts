import { Component } from '@angular/core';
import { IonicPage, LoadingController } from 'ionic-angular';
import CryptoJS from 'crypto-js';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

@IonicPage()
@Component({
  selector: 'page-decifrar',
  templateUrl: 'decifrar.html',
})
export class DecifrarPage {

  mensaje: string = "";
  mensajedecifrado: string = "";

  constructor(
    private _usuario: UsuariosProvider,
    private loadingCtrl: LoadingController) {
  }

  decifrar(data) {

    let loading = this.loadingCtrl.create({

      content: "cifrando..."

    });

    loading.present();

    this._usuario.obtener_storage().then(usr => {

      this.mensajedecifrado = CryptoJS.AES.decrypt(this.mensaje.toString(), usr).toString(CryptoJS.enc.Utf8);
      loading.dismiss();      

    });

  }

}

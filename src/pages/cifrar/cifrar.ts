import { Component } from '@angular/core';
import { IonicPage, LoadingController } from 'ionic-angular';
import CryptoJS from 'crypto-js';

@IonicPage()
@Component({
  selector: 'page-cifrar',
  templateUrl: 'cifrar.html',
})
export class CifrarPage {

  destino: string = "";
  mensaje: string = "";
  mensajecifrado: string = "";

  constructor(
    private loadingCtrl: LoadingController) {
  }

  cifrar(data) {

    let loading = this.loadingCtrl.create({

      content: "cifrando..."

    });

    loading.present();

    this.mensajecifrado = CryptoJS.AES.encrypt(this.mensaje, this.destino);

    this.destino = "";
    this.mensaje = "";

    loading.dismiss();

  }

}

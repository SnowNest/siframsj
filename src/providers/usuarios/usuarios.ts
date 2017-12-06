import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';

@Injectable()
export class UsuariosProvider {

  constructor(private storage: Storage, private plt: Platform) { }

  guardar_storage(data) {

    let promesa = new Promise((resolve, reject) => {

      if (this.plt.is("cordova"))
        this.storage.set("user", data);

      else
        localStorage.setItem("user", data);

      resolve();

    }).catch(error => console.log("Error en promesa Service: " + JSON.stringify(error)));

    return promesa;

  }

  obtener_storage() {

    let promesa = new Promise((resolve, reject) => {

      if (this.plt.is("cordova")) {

        this.storage.ready().then(() => {

          this.storage.get("user").then(user => {

            resolve(user);

          });

        });

      } else {

        resolve(localStorage.getItem("user"));

      }
    }).catch(error => console.log("Error en promesa Service: " + JSON.stringify(error)));

    return promesa;

  }

  borrar_storage() {

    let promesa = new Promise((resolve, reject) => {

      if (this.plt.is("cordova"))
        this.storage.remove("user");

      else
        localStorage.clear();

      resolve();

    }).catch(error => console.log("Error en promesa Service: " + JSON.stringify(error)));

    return promesa;

  }

}

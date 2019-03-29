import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { datosP } from './models/DatosPlataforma';



@Injectable()
export class ServicioFirebaseService {

  listaDegrupos: AngularFireList<any>;
  selectAlumno: datosP = new datosP();

  constructor(private firebase: AngularFireDatabase){}

    getDatos(){
   return   this.listaDegrupos = this.firebase.list('alumnosA');

    }
    istertDatos(Datos: datosP){
      this.listaDegrupos.push({
        nombre: Datos.nombreAlumno,
        grupo: Datos.grupo,
        correo: Datos.correoAlumno,
        pass: Datos.pass
      })
    }

    acualizarDatos(Datos: datosP){
      this.listaDegrupos.update(Datos.$key,{
        nombre: Datos.nombreAlumno,
        correo: Datos.correoAlumno,
        pass: Datos.pass
      });
    }

    deleteDatos($key: string){
      this.listaDegrupos.remove($key)
    }
}

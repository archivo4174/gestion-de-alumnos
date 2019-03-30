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
        nombreAlumno: Datos.nombreAlumno,
        grupo: Datos.grupo,
        correoAlumno: Datos.correoAlumno,
        pass: Datos.pass,
        carrera: Datos.carrera
      })
    }

    acualizarDatos(Datos: datosP){
      this.listaDegrupos.update(Datos.$key,{
        nombreAlumno: Datos.nombreAlumno,
        grupo: Datos.grupo,
        correoAlumno: Datos.correoAlumno,
        pass: Datos.pass,
        carrera: Datos.carrera
      });
    }

    deleteDatos($key: string){
      this.listaDegrupos.remove($key)
    }
}

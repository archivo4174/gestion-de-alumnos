import { Component, OnInit } from '@angular/core';
import { ServicioFirebaseService } from 'src/app/servicio-firebase.service';
import { datosP } from 'src/app/models/DatosPlataforma';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-grupos-maestros',
  templateUrl: './grupos-maestros.component.html',
  styleUrls: ['./grupos-maestros.component.css']
})
export class GruposMaestrosComponent implements OnInit {
productList: datosP[];

  key: string;

  constructor(private serviciofire: ServicioFirebaseService, private toastr: ToastrService){}

  ngOnInit() {

    return this.serviciofire.getDatos()
      .snapshotChanges().subscribe(item => {
        this.productList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          
          x["$key"] = element.key;
          this.key = x["$key"];
          this.productList.push(x as datosP);
         
        });
      });
  }
  onEdit(datosP: datosP){
    this.serviciofire.selectAlumno = Object.assign({},datosP);
    
  }
  
  onUpdate(){
    this.serviciofire.acualizarDatos({
      $key: this.key,
      nombreAlumno: this.serviciofire.selectAlumno.nombreAlumno,
      grupo: this.serviciofire.selectAlumno.grupo,
      correoAlumno: this.serviciofire.selectAlumno.correoAlumno,
      pass: this.serviciofire.selectAlumno.pass,
      carrera: this.serviciofire.selectAlumno.carrera
    });

  }

  onDelete($key: string){
    this.serviciofire.deleteDatos($key);
    this.toastr.success('Alumno Eliminado');
  }
 

}

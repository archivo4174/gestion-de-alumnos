import { Component, OnInit } from '@angular/core';
import { ServicioFirebaseService } from 'src/app/servicio-firebase.service';
import { NgForm } from '@angular/forms';
import { datosP } from 'src/app/models/DatosPlataforma';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-maestos',
  templateUrl: './maestos.component.html',
  styleUrls: ['./maestos.component.css']
})
export class MaestosComponent implements OnInit {
  mostrarGrupos = true;
  mostrarReporte = false;

  

  constructor(private serviciofire: ServicioFirebaseService, private toastr: ToastrService) { }

  ngOnInit() {
    this.serviciofire.getDatos();
    this.resetForm();
  }
    
  onSubmit(alumnoForm: NgForm){
    this.serviciofire.istertDatos(alumnoForm.value);
    this.resetForm(alumnoForm);
    
  }

  

  resetForm(alumnoForm?: NgForm){
    if(alumnoForm != null)
      alumnoForm.reset();
    this.serviciofire.selectAlumno = new datosP();
  }

  grupos(){
    this.mostrarGrupos = true;
    this.mostrarReporte = false;
    
    
     
  }
  reportes(){
    this.mostrarGrupos = false;
    this.mostrarReporte = true;
  }

}

import { Component, OnInit } from '@angular/core';
import { ServicioFirebaseService } from 'src/app/servicio-firebase.service';

@Component({
  selector: 'app-grupos-maestros',
  templateUrl: './grupos-maestros.component.html',
  styleUrls: ['./grupos-maestros.component.css']
})
export class GruposMaestrosComponent implements OnInit {

  items:any;
   
  constructor(private conexion: ServicioFirebaseService) {
    this.conexion.datosGrupos().subscribe(item =>{
      this.items = item;
      console.log(item)
    })
   }

  ngOnInit() {
  }

 

}

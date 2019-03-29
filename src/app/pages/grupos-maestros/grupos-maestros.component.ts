import { Component, OnInit } from '@angular/core';
import { ServicioFirebaseService } from 'src/app/servicio-firebase.service';
import { datosP } from 'src/app/models/DatosPlataforma';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-grupos-maestros',
  templateUrl: './grupos-maestros.component.html',
  styleUrls: ['./grupos-maestros.component.css']
})
export class GruposMaestrosComponent implements OnInit {
productList: datosP[];

  constructor(private serviciofire: ServicioFirebaseService){}

  ngOnInit() {

    return this.serviciofire.getDatos()
      .snapshotChanges().subscribe(item => {
        this.productList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          
          x["$key"] = element.key;
          this.productList.push(x as datosP);
         
        });
      });
  }

 

}

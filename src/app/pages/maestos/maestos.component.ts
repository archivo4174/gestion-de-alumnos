import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maestos',
  templateUrl: './maestos.component.html',
  styleUrls: ['./maestos.component.css']
})
export class MaestosComponent implements OnInit {
  mostrarGrupos = true;
  mostrarReporte = false;

  

  constructor() { }

  ngOnInit() {
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

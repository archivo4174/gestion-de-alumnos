import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  redirect(){
    window.location.href = 'https://www.educacionweb.mx/ixaya-cecytej/login_a1/'
  }
  redirect2(){
    window.location.href = 'http://moodle.cecytejalisco.mx/?redirect=0'
  }

}

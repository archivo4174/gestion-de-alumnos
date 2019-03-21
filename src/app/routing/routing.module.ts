import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { InicioComponent } from '../pages/inicio/inicio.component';
import { MaestosComponent } from '../pages/maestos/maestos.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'login', component: LoginComponent,},
  {path: 'maestros', component: MaestosComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' },
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }

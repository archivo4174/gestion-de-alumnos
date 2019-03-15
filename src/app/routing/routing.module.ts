import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { InicioComponent } from '../pages/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'inicio', component: InicioComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }

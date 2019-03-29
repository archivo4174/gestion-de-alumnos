import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RoutingModule } from './routing/routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PlataformaComponent } from './plataforma/plataforma.component';
import { MaestosComponent } from './pages/maestos/maestos.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { PadresComponent } from './pages/padres/padres.component';
import { GruposMaestrosComponent } from './pages/grupos-maestros/grupos-maestros.component';
import { ReporteMaestrosComponent } from './pages/reporte-maestros/reporte-maestros.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { ServicioFirebaseService } from './servicio-firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    PlataformaComponent,
    MaestosComponent,
    AlumnosComponent,
    PadresComponent,
    GruposMaestrosComponent,
    ReporteMaestrosComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RoutingModule,
    FormsModule
  ],
  providers: [
     ServicioFirebaseService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

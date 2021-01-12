import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { ListaIncidenciasComponent } from './componentes/lista-incidencias/lista-incidencias.component';

import {IncidenciasService} from './services/incidencias.service';
import {Incidencia,IncidenciaData} from './models/incidencia.model';


@NgModule({
  declarations: [
    AppComponent,
    ListaIncidenciasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ListaIncidenciasComponent,
    Incidencia,
    IncidenciaData
  ],
  providers: [IncidenciasService],
  bootstrap: [AppComponent]
})
export class AppModule { }

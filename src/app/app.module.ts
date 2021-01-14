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

import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogAnyadirComponent } from './componentes/dialog-anyadir/dialog-anyadir.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { DialogEditarComponent } from './componentes/dialog-editar/dialog-editar.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaIncidenciasComponent,
    DialogAnyadirComponent,
    DialogEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule 
  ],
  providers: [IncidenciasService],
  bootstrap: [AppComponent]
})
export class AppModule { }

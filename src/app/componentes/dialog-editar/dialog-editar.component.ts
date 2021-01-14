import { Component, Input, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Incidencia,IncidenciaData, IncidenciaEnviar } from '../../models/incidencia.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { IncidenciasService } from '../../services/incidencias.service';
import { MatTableDataSource } from '@angular/material/table';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-editar',
  templateUrl: './dialog-editar.component.html',
  styleUrls: ['./dialog-editar.component.scss']
})
export class DialogEditarComponent implements OnInit {

  incidencia:Incidencia;
  formularioEditar:FormGroup;

  constructor(private incidenciaServicio:IncidenciasService, @Inject(MAT_DIALOG_DATA) public data: {incidencia:Incidencia}) { 
    this.formularioEditar = new FormGroup({
      titulo: new FormControl(this.data.incidencia.data.title),
      prioridad : new FormControl(this.data.incidencia.data.priority),
      descripcion: new FormControl(this.data.incidencia.data.description),
      creacion: new FormControl(this.data.incidencia.data.created)
    });
  }

  ngOnInit(): void {
  }

  editar(incidencia:Incidencia){
    this.incidenciaServicio.updateIncidencia(incidencia);
  }

}

import { Component, OnInit } from '@angular/core';
import { IncidenciasService } from '../../services/incidencias.service';
import { Incidencia,IncidenciaData, IncidenciaEnviar } from '../../models/incidencia.model';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { DialogAnyadirComponent } from '../dialog-anyadir/dialog-anyadir.component';

@Component({
  selector: 'app-lista-incidencias',
  templateUrl: './lista-incidencias.component.html',
  styleUrls: ['./lista-incidencias.component.scss']
})
export class ListaIncidenciasComponent implements OnInit {

  
  incidencias=new MatTableDataSource();//Incidencia[];
  displayedColumns: string[] = ['id','descripcion','creado','prioridad','titulo'];

  constructor(private incidenciaService:IncidenciasService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.incidenciaService.getIncidencias().subscribe(data => {
      this.incidencias.data = data.map(e => {
        return {
          id: e.payload.doc.id,
          data:e.payload.doc.data()
        } as Incidencia;
      })
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogAnyadirComponent);
    dialogRef.componentInstance.listaI = this.incidencias.data;

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  create(incidencia: IncidenciaEnviar){
    this.incidenciaService.createIncidencia(incidencia);
  }

}

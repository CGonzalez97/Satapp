import { Component, OnInit } from '@angular/core';
import { IncidenciasService } from '../../services/incidencias.service';
import { Incidencia,IncidenciaData } from '../../models/incidencia.model';

@Component({
  selector: 'app-lista-incidencias',
  templateUrl: './lista-incidencias.component.html',
  styleUrls: ['./lista-incidencias.component.scss']
})
export class ListaIncidenciasComponent implements OnInit {

  incidencias:Incidencia[];

  constructor(private incidenciaService:IncidenciasService) { }

  ngOnInit(): void {
    this.incidenciaService.getIncidencias().subscribe(data => {
      this.incidencias = data.map(e => {
        return {
          id: e.payload.doc.id,
          data:e.payload.doc.data()
        } as Incidencia;
      })
    });
  }

}

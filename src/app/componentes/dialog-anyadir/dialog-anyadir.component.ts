import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Incidencia,IncidenciaData, IncidenciaEnviar } from '../../models/incidencia.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { IncidenciasService } from '../../services/incidencias.service';

@Component({
  selector: 'app-dialog-anyadir',
  templateUrl: './dialog-anyadir.component.html',
  styleUrls: ['./dialog-anyadir.component.scss']
})
export class DialogAnyadirComponent implements OnInit {



  formularioAdd:FormGroup;
  listaI;

  constructor(private incidenciaServicio:IncidenciasService) {
    this.formularioAdd = new FormGroup({
      titulo: new FormControl(),
      prioridad : new FormControl(),
      descripcion: new FormControl()

   })
  };

  ngOnInit(): void {
  }

  enviar(){
    alert('Entra al método de enviar');
    let datos = new IncidenciaData(this.formularioAdd.controls['titulo'].value,this.formularioAdd.controls['descripcion'].value,
    this.formularioAdd.controls['prioridad'].value);
    let existe = true;
    /*let id;
    while(existe){
      alert('Dentro del bucle');
      id = (Math.random()*1000000).toString();
      for(let i of this.listaI){
        if(i.id != id){
          existe=false;
        }
      }
    }*/
    alert('Sale del bucle');
    //let inci = new Incidencia(/*id,*/ datos);
    let incid = {
        //id :id,
        title: this.formularioAdd.controls['titulo'].value,
        description: this.formularioAdd.controls['descripcion'].value,
        priority: this.formularioAdd.controls['prioridad'].value,
        created: new Date()
    };
    //let incidenciaEnviar=new IncidenciaEnviar(/*id,*/ this.formularioAdd.controls['titulo'].value,this.formularioAdd.controls['descripcion'].value,
    //this.formularioAdd.controls['prioridad'].value);
    this.incidenciaServicio.createIncidencia(/*inci*/incid);
  }

}

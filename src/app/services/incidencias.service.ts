import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Incidencia,IncidenciaData, IncidenciaEnviar } from '../models/incidencia.model';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

  constructor(private firestore: AngularFirestore) { }

  getIncidencias() {
    return this.firestore.collection('incidencias').snapshotChanges();
  }

  createIncidencia(incidencia: /*Incidencia*/IncidenciaEnviar){
    alert('Entra al método del servicio');
    return this.firestore.collection('incidencias').add(incidencia);    
  }

  deleteIncidencia(id:String){
    this.firestore.doc('incidencias/' + id).delete();
  }

  updateIncidencia(incidencia: Incidencia){
    delete incidencia.id;
    this.firestore.doc('incidencias/' + incidencia.id).update(incidencia);
  }
}

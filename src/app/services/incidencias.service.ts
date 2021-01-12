import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Incidencia,IncidenciaData } from '../models/incidencia.model';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

  constructor(private firestore: AngularFirestore) { }

  getIncidencias() {
    return this.firestore.collection('incidencias').snapshotChanges();
}


}

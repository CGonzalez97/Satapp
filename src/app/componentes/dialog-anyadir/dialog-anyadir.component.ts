import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-anyadir',
  templateUrl: './dialog-anyadir.component.html',
  styleUrls: ['./dialog-anyadir.component.scss']
})
export class DialogAnyadirComponent implements OnInit {

  formularioAdd:FormGroup;

  constructor() {
    this.formularioAdd = new FormGroup({
      titulo: new FormControl(),
      prioridad : new FormControl(),
      descripcion: new FormControl()

   })
  };

  ngOnInit(): void {
  }

}

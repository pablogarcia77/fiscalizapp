import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  datos: FormGroup;

  @Output() contactData: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder
  ) {
    this.datos = this.fb.group({
      mesa: [''],
      contacto: ['']
    })
  }

  ngOnInit(): void {
  }

  closePanel(): void {
    this.contactData.emit(this.datos.value);
  }

}

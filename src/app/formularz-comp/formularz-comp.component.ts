import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormData } from '../formularz';
import { log } from 'util';

@Component({
  selector: 'app-formularz-comp',
  templateUrl: 'formularz-comp.component.html',
  styleUrls: ['./formularz-comp.component.css']
})

export class FormularzCompComponent {

  @Output() outputToParent: EventEmitter<FormData> = new EventEmitter<FormData>();

   readyJSON: FormData = {} as FormData;

   submitForm(): void {
    this.outputToParent.emit(this.readyJSON);
    //  this.readyJSON = {} as FormData;
    console.log(this.readyJSON);
    }

}


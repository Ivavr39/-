import { Component, Output, EventEmitter, OnInit, Injectable, Input } from '@angular/core';
import { FormData } from '../formularz';

@Component({
  selector: 'app-formularz-comp',
  templateUrl: 'formularz-comp.component.html',
  styleUrls: ['./formularz-comp.component.css']
})

export class FormularzCompComponent implements OnInit {
  @Output()
   outputToParent: EventEmitter<FormData> = new EventEmitter<FormData>();

  constructor() { }

  readyJSON: FormData = {} as FormData;

      ngOnInit() {
   }

   submitForm(): void {
    this.outputToParent.emit(this.readyJSON);
    //  this.readyJSON = {} as FormData;
    console.log(this.readyJSON);
    }

}


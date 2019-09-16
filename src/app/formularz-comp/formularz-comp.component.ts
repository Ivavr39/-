import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormData } from '../formularz';
import { stringify } from 'querystring';


@Component({
  selector: 'app-formularz-comp',
  templateUrl: 'formularz-comp.component.html',
  styleUrls: ['./formularz-comp.component.scss']
})
export class FormularzCompComponent implements OnInit {

  constructor() { }

  readyJSON: FormData = {} as FormData;


  //    // tslint:disable-next-line: no-input-rename
  //  @Input('emailfrom') public emailFrom: string;
  //  // tslint:disable-next-line: no-input-rename
  //  @Input('emailto') public emailTo: string;
  //  // tslint:disable-next-line: no-input-rename
  //  @Input('emailcc') public emailCc: string;
  //  // tslint:disable-next-line: no-input-rename
  //  @Input('emailsub') public emailSub: string;
  //  // tslint:disable-next-line: no-input-rename
  //  @Input('emailbody') public emailBody: string;

   @Output() clickEvent: EventEmitter<FormData> = new EventEmitter();

    ngOnInit() {
  //     //  this.readyJSON = {
  //   //  emailFrom: this.emailFrom,
  //   //  emailTo: this.emailTo,
  //   //  emailCc: this.emailCc,
  //   //  emailSub: this.emailSub,
  //   //  emailBody: this.emailBody
  //  }
 }
   submitForm(): void {
     this.clickEvent.emit(this.readyJSON);
     this.readyJSON = {} as FormData;
     console.log(this.readyJSON);
    }


}


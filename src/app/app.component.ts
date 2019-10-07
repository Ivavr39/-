import { AppServiceService } from './app-service.service';
import { Component, Input, EventEmitter, Output, ViewChild} from '@angular/core';
import { Email } from './model';
import { FormData } from './formularz';
import { FormularzCompComponent } from './formularz-comp/formularz-comp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  getData: Email;

  @Input() childCurrentValue: FormData;

  constructor(private appService: AppServiceService ) {
  }

  jsonToSend: EventEmitter<FormData> = new EventEmitter<FormData>();


  sendEmail(sendData) {
    this.childCurrentValue = sendData;

    if (!this.childCurrentValue.emailFileList) {
    this.appService.postEmailPlaintext(sendData).subscribe(( data: any ) => {
      return this.getData = data;
    });
    } else {
    this.appService.postEmailPlaintextWithAtt(sendData).subscribe(( data: any ) => {
      return this.getData = data;
    });
    console.log('Вот такие данные: ' + JSON.stringify(sendData));
    }}}

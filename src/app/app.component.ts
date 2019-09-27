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
    console.log('Вот такие данные: ' + JSON.stringify(sendData));
    this.appService.postEmailPlaintext(sendData).subscribe(( data: any ) => {
      return this.getData = data;
    });
   }

  // sendEmail(sendData) {
  //   this.childCurrentValue = sendData;
  //   console.log('Вот такие данные: ' + JSON.stringify(sendData));
  //   this.appService.postEmailPlaintext(sendData).subscribe(( data: FormData ) => this.childCurrentValue = data );
  // / getOutputValue(sendJson) {
  //   return this.childCurrentValue = sendJson ;
  // }
  // postJson(): FormData {
  //   this.jsonToSend.emit(this.childCurrentValue);
  //  //  this.readyJSON = {} as FormData;
  //   console.log(this.childCurrentValue);
  //   return this.childCurrentValue;
  //  }

  // //  sentEmail(sentJson) {
  //   this.childCurrentValue = sentJson;
  //   this.appService.postEmailPlaintext(sentJson).subscribe((data1: FormData) => this.childCurrentValue = data1);
  // }


}

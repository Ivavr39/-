import { AppServiceService } from './app-service.service';
import { Component } from '@angular/core';
import { Email } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  getData: Email | string;
  constructor(private appService: AppServiceService) {
  }
  sendEmail(sendData) {
    this.getData = sendData;
    console.log('Вот такие данные: ' + sendData,
    this.appService.getEmailPlaintext(sendData).subscribe(( data: Email ) => this.getData = data ));
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Email } from '../model';

@Component({
  selector: 'app-send-data',
  templateUrl: './send-data.component.html',
  styleUrls: ['./send-data.component.scss']
})
export class SendDataComponent implements OnInit {

  // public text: string;
  childCurrentValue: FormData ;
  // public readyJSON: formData;

  // @Input() readyJson: FormData | any;

  @Output() sendDataEvent: EventEmitter<FormData> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendData(): void {
    console.log(this.childCurrentValue + '!!!');
    this.sendDataEvent.emit(this.childCurrentValue);
  }
}

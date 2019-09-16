import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-send-data',
  templateUrl: './send-data.component.html',
  styleUrls: ['./send-data.component.scss']
})
export class SendDataComponent implements OnInit {

  public text: string;

  // public readyJSON: formData;

  // @Input() readyJson: FormData | any;

  @Output() sendDataEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // collectJson(): void {
  //   this.readyJson = this.text;
  //   console.log(this.text)
  // }

  sendData(): void {
    this.sendDataEvent.emit(this.text);
  }
}

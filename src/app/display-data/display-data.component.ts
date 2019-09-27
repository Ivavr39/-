import { Component, OnInit, Input } from '@angular/core';
import { Email } from '../model';

import { FormData } from '../formularz';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit {

  // @Input() readyData: FormData;
  @Input() getData: Email;


  constructor() {}

  ngOnInit(): void {}

}

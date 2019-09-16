import { Component, OnInit, Input } from '@angular/core';
import { Email } from '../model';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit {

  @Input()
  getData: Email;
  constructor() {}

  ngOnInit(): void {}

 }


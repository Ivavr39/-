import { Component, Output, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormData } from '../formularz';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formularz-comp',
  templateUrl: 'formularz-comp.component.html',
  styleUrls: ['./formularz-comp.component.css']
})

export class FormularzCompComponent implements OnInit {

 @Output() outputToParent: EventEmitter<FormData> = new EventEmitter<FormData>();
 @ViewChild('fileInput', {static: false})
    fileInput: ElementRef;
    readyJSON: FormData = {} as FormData;
    uploadForm: FormGroup;

 constructor(private http: HttpClient) {  }

  ngOnInit() {

    }

    onFileUpload() {
      const imageBlob = this.fileInput.nativeElement.files[0];
      const file = new FormData();
      file.append('file', imageBlob);
      console.log(JSON.stringify(this.readyJSON));

      this.http.post('http://localhost:4200', file).subscribe ( response => {
      console.log(response);

    });
    }

    submitForm(): void {
    this.outputToParent.emit(this.readyJSON);
      //  this.readyJSON = {} as FormData;
    console.log(JSON.stringify(this.readyJSON));
    }}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {FileInputAccessorModule} from 'file-input-accessor';
import { AlertModule } from 'ngx-bootstrap';
import { FileSelectDirective } from 'ng2-file-upload';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { SendDataComponent } from './send-data/send-data.component';
import { FormularzCompComponent } from './formularz-comp/formularz-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayDataComponent,
    SendDataComponent,
    FormularzCompComponent,
    FileSelectDirective,
             ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientJsonpModule,
    FileInputAccessorModule,
    AlertModule.forRoot()
          ],
  providers: [ FormularzCompComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Myc01Component } from './myc01/myc01.component';

import {HttpClientModule} from '@angular/common/http';
import { Myc02Component } from './myc02/myc02.component';
import { Myc03Component } from './myc03/myc03.component';
import { MydatePipe } from './mydate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Myc01Component,
    Myc02Component,
    Myc03Component,
    MydatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

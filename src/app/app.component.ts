import { Myc01Component } from './myc01/myc01.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test1';

  @ViewChild('myc1')
  abc!: Myc01Component;

  Change(){
    alert('SSSS')
  }
}

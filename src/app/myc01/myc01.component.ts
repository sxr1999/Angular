import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc01',
  templateUrl: './myc01.component.html',
  styleUrls: ['./myc01.component.css']
})
export class Myc01Component implements OnInit{
  ngOnInit(): void {    
  }
  constructor(){}


  @Input() name: string;
  @Input() age1: number;

  @Input() boss:any;

}

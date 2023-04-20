import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-myc02',
  templateUrl: './myc02.component.html',
  styleUrls: ['./myc02.component.css']
})
export class Myc02Component implements OnInit{

  constructor(public http : HttpClient){

  }

  Result:Res[]

  
  ngOnInit(): void {


    this.http.get<Res[]>('/api/WeatherForecast').subscribe(res=>{
      console.log(res)
      this.Result = res

      
  
    })
  }
}

interface Res{
  data : Date;
  summary : string;
  temperatureC : Number;
  temperatureF : Number
}

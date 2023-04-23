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
    this.Model = { date: new Date(), summary: '', temperatureC: 0, temperatureF: 0 };
    
  }

  Result:Res[]

  
  ngOnInit(): void {


    this.GetData();
  }

  GetData(){
    this.http.get<Res[]>('/api/WeatherForecast').subscribe(res=>{
      console.log(res)
      this.Result = res
    })
  }

  Model: Res;

 postCfg = {
    headers: {'Content-Type': 'application/json;charset=UTF-8'}
  };

  add(){
    console.log(this.Model)
    this.http.post('/api/WeatherForecast',this.Model,this.postCfg,).subscribe(res=>{
       this.GetData();
    })
    
  }
}



interface Res{
  date : Date;
  summary : string;
  temperatureC : Number;
  temperatureF : Number
}

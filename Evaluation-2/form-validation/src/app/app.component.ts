import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'form-validation';

  public name:string='';
  public email:string='';
  public password:string='';
  public age:number= 0;
  public country:string= '';
  public acceptance:string= '';






  ngOnInit():void{
    initFlowbite()
  }
}

import { Component } from '@angular/core';
import { MasterService } from '../../master.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private service: MasterService){

  }

  login(){
    
  }
}

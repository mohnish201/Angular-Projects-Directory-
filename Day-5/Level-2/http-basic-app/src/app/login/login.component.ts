import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  public email: string = "";
  public password: string = "";
  


  constructor(private http: HttpClient, private router: Router, private authService: AuthenticationService) { }

  login() {
    this.authService.login(this.email, this.password)
  }
}

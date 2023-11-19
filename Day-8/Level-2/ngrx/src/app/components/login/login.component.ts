import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateModel } from '../../store/product.model';
import { Store } from '@ngrx/store'
import { login } from '../../store/product.action';
import { getAuth } from '../../store/product.selector';
import { ProductService } from '../../store/product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public email: string = "";
  public password: string = "";

  AuthState!: boolean

  constructor(private http: HttpClient, private router: Router,private loginService:ProductService ,private store: Store<{ product: StateModel }>) { }

  login() {
    this.loginService.login(this.email, this.password)
    this.store.dispatch(login())
    // this.store.select(getAuth).subscribe((data) => this.AuthState = data)
  }

}

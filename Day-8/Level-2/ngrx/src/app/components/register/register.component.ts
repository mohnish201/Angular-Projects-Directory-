import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder,ReactiveFormsModule,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login, register, registerSuccess } from '../../store/product.action';
import { StateModel, UserModel } from '../../store/product.model';
import { ProductService } from '../../store/product.service';

@Component({
  standalone:true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  imports:[ReactiveFormsModule, NgIf]
})
export class RegisterComponent {

  public userName: string = "";
  public email: string = "";
  public password: string = "";

  AuthState!: boolean

  constructor(private http: HttpClient, private router: Router, private builder:FormBuilder, private loginService: ProductService, private store: Store<{ product: StateModel }>) { }

  login() {
    this.loginService.login(this.email, this.password)
    this.store.dispatch(login())
    // this.store.select(getAuth).subscribe((data) => this.AuthState = data)
  }

  registerForm= this.builder.group({
    userName: this.builder.control("", Validators.required),
    email: this.builder.control("", Validators.required),
    password: this.builder.control("", Validators.required)
  })

  register() {

    if(this.registerForm.valid){
      const user:UserModel = {
        // username: this.userName,
        email: this.registerForm.value.email as string,
        password: this.registerForm.value.password as string
      }
      this.loginService.register(user);
      this.store.dispatch(registerSuccess({ newUser: user }))
    }
   
  }

}

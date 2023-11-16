import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from "@angular/core"
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public token: string = ""
  private isAuthSubject = new BehaviorSubject<boolean>(false);
  isAuth$ = this.isAuthSubject.asObservable();
  constructor(private http: HttpClient, private router: Router) { 
    this.isAuthSubject.next(this.isAuthenticated());
  }

  private isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  login(email: string, password: string) {
    const loginData = {
      email,
      password
    };

    this.http.post<any>("https://reqres.in/api/login", loginData)
      .subscribe(
        (response) => {
          localStorage.setItem("token", response.token)
          alert("Login Successfull")
          this.router.navigate(['/'])
          this.token = response.token
          this.isAuthSubject.next(true);
        },
        (error) => {
          console.error('Login Error:', error);
        }
      );
  }

  logout(){
    localStorage.removeItem('token');
    this.isAuthSubject.next(false); 
  }

}

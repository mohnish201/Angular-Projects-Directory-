import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { AuthenticationService } from './authentication.service';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'http-basic-app';
  public isAuth : boolean= false
  public token = localStorage.getItem("token") || ""
  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    initFlowbite();
    this.authService.isAuth$.subscribe((isAuthenticated) => {
      this.isAuth = isAuthenticated;
    });
    // console.log(this.isAuth)
  }

  logout(){
   this.authService.logout()
  }
}

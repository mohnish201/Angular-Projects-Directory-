import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routes-app';

  public isAuth:boolean=false

  constructor(){}

  login():void{
      this.isAuth = true
  }

  logout():void{
      this.isAuth=false
  }
}

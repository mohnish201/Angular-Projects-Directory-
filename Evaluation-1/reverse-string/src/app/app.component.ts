import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reverse-String';
  
  public str: string="";
  public output=""

  reverseString(){
    const output = this.str.split('').reverse().join('');
    this.output = output
    this.str=""
  }

}

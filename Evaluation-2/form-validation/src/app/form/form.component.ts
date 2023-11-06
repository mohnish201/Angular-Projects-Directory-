import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  userModel = new User("", "", "", "", "", false)

  onSubmit(){
    
  }

}

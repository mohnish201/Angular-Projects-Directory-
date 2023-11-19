import { Component , Input} from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../../master.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private service: MasterService, private router:Router){}

  @Input() isAuth!:boolean

  logout():void{
    this.isAuth = false
    this.router.navigate(['login'])
    console.log(this.isAuth)
  }

  login():void{
    this.isAuth = true
    this.router.navigate(['/'])
    console.log(this.isAuth)
  }

}

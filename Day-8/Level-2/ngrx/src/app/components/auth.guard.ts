import { ActivatedRouteSnapshot, RouterStateSnapshot,Router } from "@angular/router";
import {Injectable} from "@angular/core"
import { StateModel } from "../store/product.model";
import {Store} from '@ngrx/store'
import { getAuth } from "../store/product.selector";


@Injectable({
    providedIn: 'root'
  })
export class AuthGuard {

    isAuth:boolean=false

    constructor(
        private router:Router, private store:Store<{product:StateModel}>
    ){}

    canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean{

        this.store.select(getAuth).subscribe((data) => this.isAuth = data)
        
        if(this.isAuth){
            return true
        }
        else{
            this.router.navigate(['/login'])
            return false
        }

      
    }

    
}
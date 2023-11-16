import { ActivatedRouteSnapshot, RouterStateSnapshot,Router } from "@angular/router";
import { AuthenticationService } from "./authentication.service";
import {Injectable} from "@angular/core"


@Injectable({
    providedIn: 'root'
  })
export class AuthGuard {

    isAuth:boolean=false

    constructor(
        private authService:AuthenticationService,
        private router:Router
    ){}

    canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean{
        
        this.authService.isAuth$.subscribe((isAuthenticated) => {
            this.isAuth = isAuthenticated;
          });

        if(this.isAuth){
            return true
        }
        else{
            this.router.navigate(['/login'])
            return false
        }
    }

    
}
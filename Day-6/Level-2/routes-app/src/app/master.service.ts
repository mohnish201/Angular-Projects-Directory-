import {Injectable} from '@angular/core'


@Injectable()
export class MasterService{

    public isAuth:boolean=false

    constructor(){}

    login(){
        this.isAuth = true
    }

    logout(){
        this.isAuth=false
    }
}
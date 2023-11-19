import { Injectable } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  generateObservable(): Observable<number>{
    return interval(1000).pipe(
      map(()=>{
         const random = Math.random();
         if(random<0.2){
          throw new Error('Simulated error occurred')
         }
         return random*100;
      })
    )
  }
}

import { Component,  OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.css'
})
export class DataDisplayComponent implements OnInit, OnDestroy{

    dataSubscription:Subscription | undefined;

    constructor(private dataService: DataService){}

    ngOnInit(): void {
      this.dataSubscription = this.dataService.generateObservable().subscribe(

        data => {
          console.log('Received Data', data);
        },
        error =>{
          console.log('Error Occurred:', error)
        }
      )
    }

    ngOnDestroy(): void {
      if(this.dataSubscription){
        this.dataSubscription.unsubscribe();
      }
    }


}

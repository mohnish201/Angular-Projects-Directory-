import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  count = 0;

  increment() {
    if (this.count >= 0) {
      this.count += 1
    }
    return this.count
  }

  decrement() {
    if (this.count >= 1) {
     this.count -= 1
    }
    return this.count
  }
}

import { Component, OnInit } from '@angular/core';
import { StateModel } from '../../store/product.model';
import { Store } from '@ngrx/store';
import { logout } from '../../store/product.action';
import { getAuth } from '../../store/product.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuth$: Observable<boolean>; // Use Observable to receive isAuth changes
  isAuth!: boolean

  constructor(private store: Store<{ product: StateModel }>) {
    this.isAuth$ = this.store.select(getAuth); // Select the isAuth value from the store
  }

  ngOnInit(): void {
    this.isAuth$.subscribe((isAuthValue) => {
      this.isAuth = isAuthValue; // Update the component's isAuth property when the value changes
    });
  }

  logout(): void {
    if (confirm("Are you sure you want to Logout")) {
      this.store.dispatch(logout());
    }
  }
}

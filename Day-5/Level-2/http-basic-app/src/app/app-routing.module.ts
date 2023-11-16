import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './authGuard';
import { CartListComponent } from './cart-list/cart-list.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SingleCardComponent } from './single-card/single-card.component';

const routes: Routes = [
  {path:'', component:ProductListComponent, canActivate:[AuthGuard]},
  {path:'details/:id', component:SingleCardComponent, canActivate:[AuthGuard]},
  {path:'cart', component:CartListComponent, canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

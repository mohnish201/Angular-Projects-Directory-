import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SingleCardComponent } from './single-card/single-card.component';

const routes: Routes = [
  {path:'', component:ProductListComponent},
  {path:'details/:id', component:SingleCardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

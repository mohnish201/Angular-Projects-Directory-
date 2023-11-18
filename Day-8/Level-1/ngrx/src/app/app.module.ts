import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects';
import { productReducer} from './store/product.reducer';
import { StateModel } from './store/product.model';
import { ProductEffects } from './store/product.effect';
import { ProductService } from './store/product.service';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    CartComponent,
    LoginComponent,
    SkeletonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({product:productReducer}),
    EffectsModule.forRoot([ProductEffects]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const appRoutes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'products', component: ProductListComponent },
 { path: 'products/:id', component: ProductDetailsComponent },
 { path: 'cart', component: CartComponent },
 { path: 'login', component: LoginComponent },
 { path: 'register', component: RegisterComponent },
 { path: '**', component: PageNotFoundComponent }
];
@NgModule({
 declarations: [
   AppComponent,
   ProductListComponent,
   HomeComponent,
   PageNotFoundComponent,
   ProductDetailsComponent,
   CartComponent,
   LoginComponent,
   RegisterComponent
 ],
 imports: [
   BrowserModule,
   ReactiveFormsModule,
   RouterModule.forRoot(
     appRoutes,
     { enableTracing: true } // <-- debugging purposes only
   )
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }


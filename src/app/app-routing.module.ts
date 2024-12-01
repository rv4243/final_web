import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProfileComponent } from './pages/profile/profile.component';


import { CartComponent } from './pages/cart/cart.component';



const routes: Routes = [
  {path : '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  {path : 'profile', component: ProfileComponent},
  { path: 'cart', component: CartComponent },
  { path: 'cart', component: CartComponent },



  {path : '**', component: HomeComponent},

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

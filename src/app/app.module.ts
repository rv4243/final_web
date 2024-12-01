import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './pages/cart/cart.component';
import { AboutComponent } from './pages/about/about.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from './product-item/product-item.component';
import { enableProdMode } from '@angular/core';
import { CartService } from './services/cart.service'; // Import the service
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpAddEditComponent } from './pages/dashboard/emp-add-edit/emp-add-edit.component';












// import { Card1PageComponent } from './card1-page/card1-page.component';

import { DataService } from './service/data.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'about', component: AboutComponent },
];
// if (environment.production) {
//   enableProdMode();
// }

@NgModule({
  declarations: [




   ],
  imports: [
    MatToolbarModule,
    NgbModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    BrowserModule,
    SidenavComponent,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    NavbarComponent,
    // SidenavComponent,
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    ProfileComponent,

    MatSnackBarModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDialogModule,
    BrowserAnimationsModule,




    RouterModule.forRoot([
      {path: 'home',component:HomeComponent},
      {path: 'about', component:AboutComponent},
      {path: 'contact', component:ContactComponent},
      {path: 'profile', component:ProfileComponent},
      {path: 'product', component:ProductsComponent},
      {path: 'product/:id', component:ProductItemComponent},
      {path: 'cart', component:CartComponent},

      {path : '**', component: HomeComponent},
       // Example route
    ])




  ],
  providers:[DataService,CartService]
  // bootstrap: []
})
export class AppModule { }


import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductsComponent } from './pages/products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CartComponent } from './pages/cart/cart.component';
import { ProductItemComponent } from './product-item/product-item.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProfileComponent,
    ProductsComponent,
    NavbarComponent,
    // SidenavComponent,
    ProductItemComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    CartComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstApp';


  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

}

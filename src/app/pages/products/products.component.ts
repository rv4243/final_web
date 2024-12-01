import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from "../../sidenav/sidenav.component";
import { Inject } from '@angular/core';


import { CartService } from '../../services/cart.service'; // Update the path to match the directory structure


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatToolbarModule, CommonModule, HttpClientModule, MatListModule, MatSidenavModule,
     SidenavComponent,
    ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [HttpClient]
})
export class ProductsComponent implements OnInit {
  imageList : Array<any> = [];
  filteredList : Array<any> = [];
  filteredProducts : Array<any> = [];

  constructor(@Inject(CartService) private cartService: CartService,
  public router: Router,public httpClient: HttpClient) {}



  ngOnInit() {
    this.getData();
  }

  // constructor(public router: Router,
  //           public httpClient: HttpClient
  // ) { }

  getData() {
    let url : string = '/assets/data/products.json';
    this.httpClient.get(url).subscribe((data: any) => {
      // console.log(data);
      this.imageList = (data && data.items && data.items.length > 0 ) ? data.items : [];
      this.doFilter();
    });
  }

  doFilter(input: any = null) {
    if(input) {
      this.filteredList = (this.imageList && this.imageList.length > 0) ? this.imageList.filter((x:any) => {
        console.log(this.filteredList);  // Check if this contains the expected data
        return (x && x.category === input) ? true : false;
      }) : []
    } else {
      this.filteredList = this.imageList;
    }
  }

  clicked(){
    console.log("hii")
  }

  onCardClick(route: string) {
    this.router.navigate([route]);
  }
  filterCategory(category: string) {
    this.filteredProducts = this.imageList.filter(product => product.category === category);
  }
  addToCart(product: any) {
    this.cartService.addToCart(product); // Add the product to cart service
    this.router.navigate(['/cart']); // Navigate to cart page
  }
  redirectToGoogleForm() {
    window.open('https://forms.gle/d3fPWtz5BK6ZMFmh6', '_blank'); // Opens the form in a new tab
  }
  
}

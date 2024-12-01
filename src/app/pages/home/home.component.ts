import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CartService } from '../../services/cart.service'; // Update the path to match the directory structure
import { Inject } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports:[FormsModule,MatButtonModule, MatCardModule, MatToolbarModule, CommonModule, HttpClientModule, MatListModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  randomImages: string[] = [];

  // constructor() {
  //   this.displayRandomImages();
  // }

  
  
    
  imageList : Array<any> = [];
  filteredList : Array<any> = [];

  ngOnInit() {
    this.getData();
  }

  constructor(public router: Router,
            public httpClient: HttpClient,@Inject(CartService) private cartService: CartService
  ) {this.displayRandomImages(); }

  // Method to shuffle the images and pick 5 random ones
  displayRandomImages() {
    const shuffled = [...this.imageList].sort(() => 0.5 - Math.random());  // Shuffle the array
    this.randomImages = shuffled.slice(0, 5);  // Select the first 5 images from the shuffled array
  }

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
        return (x && x.gender === input) ? true : false;
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
  addToCart(product: any) {
    this.cartService.addToCart(product); // Add the product to cart service
    this.router.navigate(['/cart']); // Navigate to cart page
  }
  getProductsByCategory(category: string) {
    return this.filteredList.filter(item => item.category === category);
  }
  }
  


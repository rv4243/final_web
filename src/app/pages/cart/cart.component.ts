import { Component, OnInit, Inject } from '@angular/core';
import { CartService } from '../../services/cart.service'; // Import CartService
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Import FormsModule


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: any[] = []; // Array to store cart items

  constructor(@Inject(CartService) private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getItems(); // Retrieve items from cart service
  }
  redirectToGoogleForm() {
    window.open('https://forms.gle/d3fPWtz5BK6ZMFmh6', '_blank'); // Opens the form in a new tab
  }
  increaseQuantity(item: any) {
    item.quantity++;
  }

  // Decrease quantity of the item
  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  // Remove item from the cart
  removeItem(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  // Calculate total price
  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Calculate total items
  getTotalItems() {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  // Redirect to Google form or another page for payment
  
  

}

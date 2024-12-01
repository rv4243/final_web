import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: any[] = [];

  constructor() {}

  // Add a product to the cart
  addToCart(product: any): void {
    this.items.push(product);
  }

  // Get all items in the cart
  getItems(): any[] {
    return this.items;
  }

  // Clear the cart
  clearCart(): void {
    this.items = [];
  }
}

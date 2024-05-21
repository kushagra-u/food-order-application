import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Foods } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Foods[] = [];
  private cart = new BehaviorSubject<Foods[]>(this.cartItems);
  currentCart = this.cart.asObservable();

  constructor() { }

  addToCart(food: Foods) {
    this.cartItems.push(food);
    this.cart.next(this.cartItems);
  }
  removeFromCart(food: Foods) {
    const index = this.cartItems.findIndex(item => item.id === food.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.cart.next(this.cartItems);
    }
  }
  getCartItems(): Foods[] {
    return this.cartItems;
  }
}
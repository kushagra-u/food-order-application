import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Foods } from '../shared/models/food';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  
})
export class CartComponent implements OnInit {
  totalPrice:number = 0;
  cartItems: Foods[] = [];

  constructor(private cartService: CartService, private route:Router) {
   
  }

  ngOnInit(): void {
    this.cartService.currentCart.subscribe(items => {
      this.cartItems = items;
    });
   this.calculateTotalPrice();
  }
  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }
  removeItemFromCart(item: Foods): void {
    this.cartService.removeFromCart(item);
  }
  logInpage(){
    let logedIn = localStorage.getItem('logedIn');
    if(logedIn=='true'){
      this.route.navigate(['payment'])
    } else{
      alert('you have need to log-in before payment')
      this.route.navigate(['login'])
    }
  }
}
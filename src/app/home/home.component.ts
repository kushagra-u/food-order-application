import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { SearchService } from '../search.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Foods[] = [];
  filteredFoods: Foods[] = [];
  added: number = 0;

  constructor(private fs: FoodService, private searchService: SearchService, private cartService: CartService) { }

  ngOnInit(): void {
    this.foods = this.fs.getAll();
    this.filteredFoods = this.foods.map(food => ({ ...food, addedToCart: false }));

    this.searchService.currentSearchTerm.subscribe(term => {
      this.filteredFoods = this.foods.filter(food =>
        food.tags.some(tag => tag.toLowerCase().includes(term.toLowerCase()))
      );
    });

    this.cartService.currentCart.subscribe(cartItems => {
      this.filteredFoods.forEach(food => {
        food.addedToCart = cartItems.some(item => item.id === food.id);
        food.addedCount = cartItems.filter(item => item.id === food.id).length;
      });
    });
  }

  addItem(food: Foods): void {
    this.cartService.addToCart(food);
    food.addedToCart = true;
     food.addedCount = 1; 
  }

  incrementCount(food:Foods): void {
    food.addedToCart = true;
    food.addedCount += 1;
    this.cartService.addToCart(food);
  }

  decrementCount(food: Foods): void {
    if (food.addedCount > 0) {
      food.addedCount -= 1;
      this.cartService.removeFromCart(food); 
      if (food.addedCount === 0) {
        food.addedToCart = false;
      }
    }
  }
}

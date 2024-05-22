import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  searchItem: string = '';
  totalItem: number = 0;

  constructor(private searchService: SearchService, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.currentCart.subscribe(items => {
      this.totalItem = items.length;
    });
  }
  onSearchInput(): void {
    this.searchService.changeSearchTerm(this.searchItem);
  }
  search() {
    this.searchService.changeSearchTerm(this.searchItem);
  }
}


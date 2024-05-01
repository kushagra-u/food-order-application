import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  searchItem: any;
  foods: Foods[] = [];
  constructor(private fs: FoodService) {}
  ngOnInit(): void {
    this.foods = this.fs.getAll();
  }
  search() {
    this.search = this.searchItem.value;
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryModal } from "../category-modal/category-modal";

@Component({
  selector: 'app-food-filter',
  imports: [CommonModule, CategoryModal],
  templateUrl: './food-filter.html',
  styleUrl: './food-filter.css',
})
export class FoodFilter {
foodTypes = [
  { name: 'All', icon: 'grid_view' },
  { name: 'Burger', icon: 'lunch_dining' },
  { name: 'Pizza', icon: 'local_pizza' },
  { name: 'Pasta', icon: 'ramen_dining' },
  { name: 'Sandwich', icon: 'fastfood' },
  { name: 'Grill', icon: 'whatshot' },
  { name: 'FriedChicken', icon: 'restaurant_menu' },
  { name: 'Seafood', icon: 'set_meal' },
  { name: 'Salad', icon: 'eco' },
  { name: 'Soup', icon: 'soup_kitchen' },
  { name: 'Dessert', icon: 'icecream' },
  { name: 'IceCream', icon: 'icecream' },
  { name: 'Juice', icon: 'local_drink' },
  { name: 'Coffee', icon: 'coffee' },
  { name: 'Beverage', icon: 'local_cafe' },
  { name: 'Appetizer', icon: 'restaurant' },
  { name: 'MainCourse', icon: 'dinner_dining' },
  { name: 'SideDish', icon: 'food_bank' },
  { name: 'Shawarma', icon: 'takeout_dining' },
  { name: 'Kebab', icon: 'outdoor_grill' },
  { name: 'Sushi', icon: 'ramen_dining' },
  { name: 'Tacos', icon: 'emoji_food_beverage' },
  { name: 'Noodles', icon: 'ramen_dining' },
  { name: 'RiceDishes', icon: 'rice_bowl' },
  { name: 'Pastry', icon: 'bakery_dining' },
  { name: 'Breakfast', icon: 'free_breakfast' }
];


  mainFoods = this.foodTypes.slice(0, 6);

  selectedFood = this.mainFoods[0];
  modalOpen = false;

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }
onSelectFood(food: { name: string; icon: string }) {
  this.selectedFood = food;
  this.closeModal();
}


}

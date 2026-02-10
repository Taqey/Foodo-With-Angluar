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
    'Burger','Pizza','Pasta','Sandwich','Grill','FriedChicken',
    'Seafood','Salad','Soup','Dessert','IceCream','Juice',
    'Coffee','Beverage','Appetizer','MainCourse','SideDish',
    'Shawarma','Kebab','Sushi','Tacos','Noodles','RiceDishes','Pastry','Breakfast'
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

  onSelectFood(food: string) {
    this.selectedFood = food;
    this.closeModal();
  }
}

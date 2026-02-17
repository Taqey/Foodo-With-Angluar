import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryModal } from "../category-modal/category-modal";

@Component({
  selector: 'app-restaurant-filter',
  imports: [CommonModule, CategoryModal],
  templateUrl: './restaurant-filter.html',
  styleUrl: './restaurant-filter.css',
})
export class RestaurantFilter {

  // تحويل الـ enum إلى مصفوفة أصناف مع أيقونات
  restaurantCategories = [
    { name: 'All', icon: 'grid_view' },
    { name: 'FastFood', icon: 'fastfood' },
    { name: 'CasualDining', icon: 'restaurant' },
    { name: 'FineDining', icon: 'restaurant_menu' },
    { name: 'Cafe', icon: 'coffee' },
    { name: 'Bakery', icon: 'bakery_dining' },
    { name: 'DessertShop', icon: 'icecream' },
    { name: 'JuiceBar', icon: 'local_drink' },
    { name: 'Seafood', icon: 'set_meal' },
    { name: 'Steakhouse', icon: 'restaurant' },
    { name: 'Pizzeria', icon: 'local_pizza' },
    { name: 'BBQ', icon: 'outdoor_grill' },
    { name: 'FamilyRestaurant', icon: 'family_restroom' },
    { name: 'HealthyFood', icon: 'emoji_food_beverage' },
    { name: 'Vegetarian', icon: 'eco' },
    { name: 'Vegan', icon: 'spa' },
    { name: 'FoodTruck', icon: 'takeout_dining' },
    { name: 'Buffet', icon: 'dinner_dining' },
    { name: 'Sandwiches', icon: 'lunch_dining' },
    { name: 'Egyptian', icon: 'flag' },
    { name: 'Italian', icon: 'local_pizza' },
    { name: 'American', icon: 'emoji_food_beverage' },
    { name: 'Mexican', icon: 'emoji_food_beverage' },
    { name: 'Turkish', icon: 'ramen_dining' },
    { name: 'Chinese', icon: 'ramen_dining' },
    { name: 'Japanese', icon: 'ramen_dining' },
    { name: 'Indian', icon: 'restaurant_menu' },
    { name: 'Lebanese', icon: 'restaurant' },
    { name: 'Syrian', icon: 'restaurant' },
    { name: 'Greek', icon: 'restaurant' },
    { name: 'French', icon: 'restaurant' }
  ];

  // نعرض أول 6 كأزرار رئيسية
  mainCategories = this.restaurantCategories.slice(0, 6);

  selectedCategory = this.mainCategories[0];
  modalOpen = false;

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  onSelectCategory(category: { name: string; icon: string }) {
    this.selectedCategory = category;
    this.closeModal();
  }
}

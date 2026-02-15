import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FoodItem {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-category-modal',
  imports: [CommonModule],
  templateUrl: './category-modal.html',
  styleUrls: ['./category-modal.css'],
})
export class CategoryModal {
  @Input() isOpen = false;
  
  // الآن categories عبارة عن array من objects
  @Input() categories: FoodItem[] = [];

  // selected هو object واحد
  @Input() selected!: FoodItem;

  @Output() close = new EventEmitter<void>();
  @Output() select = new EventEmitter<FoodItem>();

  closeModal() {
    this.close.emit();
  }

  selectCategory(category: FoodItem) {
    this.select.emit(category);
  }
}

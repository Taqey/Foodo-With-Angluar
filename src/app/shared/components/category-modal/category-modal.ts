import { Component,EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-category-modal',
  imports: [CommonModule],
  templateUrl: './category-modal.html',
  styleUrl: './category-modal.css',
})
export class CategoryModal {
@Input() isOpen = false;
  @Input() categories: string[] = [];
  @Input() selected!: string;

  @Output() close = new EventEmitter<void>();
  @Output() select = new EventEmitter<string>();

  closeModal() {
    this.close.emit();
  }

  selectCategory(category: string) {
    this.select.emit(category);
  }
}

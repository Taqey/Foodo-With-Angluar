import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-sort',
  imports: [],
  templateUrl: './sort.html',
  styleUrl: './sort.css',
})
export class Sort {
  @Input() sort!: SortOption[];
  @Output() SelectedSort = new EventEmitter<string>();
  OnSortChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.SelectedSort.emit(value)
  }
}
export interface SortOption {
  name: string;
  value: string;
}

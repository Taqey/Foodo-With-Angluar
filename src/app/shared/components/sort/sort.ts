import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sort',
  imports: [],
  templateUrl: './sort.html',
  styleUrl: './sort.css',
})
export class Sort {
  @Input() sort!: SortOption[];

}
export interface SortOption {
  name: string;
  value: string;
}
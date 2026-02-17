import { Component, Input } from '@angular/core';
import { Search } from '../../../shared/components/search/search';
import { Pagination } from '../../../shared/components/pagination/pagination';
import { DashboardHeader } from '../../merchant-dashboard/components/dashboard-header/dashboard-header';
import { CustomerFilter } from '../../merchant-dashboard/customers/components/customer-filter/customer-filter';
import { RestaurantFilter } from '../components/restaurant-filter/restaurant-filter';
import { Sort, SortOption } from '../../../shared/components/sort/sort';


@Component({
  selector: 'app-restaurant',
  imports: [RestaurantFilter, Pagination, DashboardHeader, CustomerFilter, Search, Sort],
  templateUrl: './restaurant.html',
  styleUrl: './restaurant.css',
})
export class Restaurant {
@Input() sort: SortOption[] = [
  { name: 'Name (A → Z)', value: 'name_asc' },
  { name: 'Name (Z → A)', value: 'name_desc' },

  { name: 'Rating (High → Low)', value: 'rating_desc' },
  { name: 'Rating (Low → High)', value: 'rating_asc' },

];


}


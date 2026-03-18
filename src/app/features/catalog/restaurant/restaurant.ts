import { Component, Input, signal, Signal, WritableSignal } from '@angular/core';
import { Search } from '../../../shared/components/search/search';
import { DashboardHeader } from '../../merchant-dashboard/components/dashboard-header/dashboard-header';
import { CustomerFilter } from '../../merchant-dashboard/customers/components/customer-filter/customer-filter';
import { RestaurantFilter } from '../components/restaurant-filter/restaurant-filter';
import { Sort, SortOption } from '../../../shared/components/sort/sort';
import { RouterLink } from '@angular/router';
import { ShopDto } from '../../../core/models/irestaurant';
import { PaginationComponent } from '../../../shared/components/pagination/pagination';
import { RestaurantService } from '../../../core/services/RestaurantService/restaurant-service';
import { IPaginatedResponse } from '../../../core/models/ipaginated-response';
import { IProduct } from '../../../core/models/iproduct';
import { OrderingDirection } from '../../../core/enums/ordering-direction';
import { ProductOrderBy } from '../../../core/enums/product-order-by';
import { RestaurantOrderBy } from '../../../core/enums/restaurant-order-by';

@Component({
  selector: 'app-restaurant',
  imports: [
    RestaurantFilter,
    Search,
    Sort,
    RouterLink,
    PaginationComponent,
  ],
  templateUrl: './restaurant.html',
  styleUrl: './restaurant.css',
})
export class Restaurant {
  onPageChange(newPage: number) {
    this.currentPage = newPage;
    this.LoadRestaurants(); // استدعاء API حسب newPage
  }

  onCategorySelected(category: number) {
    this.category = category;
    this.LoadRestaurants();
  }
  onPageSizeChange(newSize: number) {
    this.pageSize = newSize;
    this.currentPage = 1; // ترجع أول صفحة
    this.LoadRestaurants();
  }

  @Input() sort: SortOption[] = [
    { name: 'Name (A → Z)', value: 'name_asc' },
    { name: 'Name (Z → A)', value: 'name_desc' },
    { name: 'Rating (High → Low)', value: 'rating_desc' },
    { name: 'Rating (Low → High)', value: 'rating_asc' },
  ];

  totalItems: number = 0;
  totalPages: number = 0;
  currentPage: number = 1;
  pageSize: number = 5;
  category!: number;
  sortBy!: number;
  sortDirection!: number;

  paginatedData: WritableSignal<ShopDto[]> = signal([]);
  constructor(private restaurantService: RestaurantService) {}
  LoadRestaurants() {
    this.restaurantService.getRestaurants(this.currentPage, this.pageSize,this.category).subscribe((response) => {
        console.log(response.data?.items); // ✅ تحقق من البيانات المستلمة
        this.paginatedData.set(response.data?.items || []); // ✅ تأكد من التعامل مع null أو undefined
        this.totalItems = response.data?.totalItems || 0; // ✅ تأكد من التعامل مع null أو undefined
        this.totalPages = response.data?.totalPages || 0; // ✅ تأكد من التعامل مع null أو undefined

    });
  }
  OnSortChange(sort: string) {
    const parts = sort.split('_');
    const [sortByStr, directionStr] = sort.split('_');
    this.sortBy = RestaurantOrderBy[sortByStr as keyof typeof RestaurantOrderBy];
    this.sortDirection = OrderingDirection[directionStr as keyof typeof OrderingDirection];

    this.LoadRestaurants();
  }
  ngOnInit(): void {
    this.LoadRestaurants();
  }
}

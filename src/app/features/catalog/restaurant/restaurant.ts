import { Component, Input } from '@angular/core';
import { Search } from '../../../shared/components/search/search';
import { DashboardHeader } from '../../merchant-dashboard/components/dashboard-header/dashboard-header';
import { CustomerFilter } from '../../merchant-dashboard/customers/components/customer-filter/customer-filter';
import { RestaurantFilter } from '../components/restaurant-filter/restaurant-filter';
import { Sort, SortOption } from '../../../shared/components/sort/sort';
import { RouterLink } from "@angular/router";
import { IRestaurant } from '../../../core/models/irestaurant';
import { PaginationComponent } from "../../../shared/components/pagination/pagination";

@Component({
  selector: 'app-restaurant',
  imports: [
    RestaurantFilter,
    DashboardHeader,
    CustomerFilter,
    Search,
    Sort,
    RouterLink,
    PaginationComponent
],
  templateUrl: './restaurant.html',
  styleUrl: './restaurant.css',
})
export class Restaurant {
onPageChange($event: number) {
throw new Error('Method not implemented.');
}
onPageSizeChange($event: number) {
throw new Error('Method not implemented.');
}

  @Input() sort: SortOption[] = [
    { name: 'Name (A → Z)', value: 'name_asc' },
    { name: 'Name (Z → A)', value: 'name_desc' },
    { name: 'Rating (High → Low)', value: 'rating_desc' },
    { name: 'Rating (Low → High)', value: 'rating_asc' },
  ];

  // ✅ مطابق للـ Interfaces الحقيقية عندك
  restaurants: IRestaurant[] = [
    {
      id: "2b7324a4-cb2a-46c1-aef0-3dfcc3d35c67",
      name: 'Hamada Hambka',
      description: 'OM ALI WAHDA BAS',
      rating: 4.2,
      categories: [
        { category: 'DessertShop' } // ✅ مش name
      ],
      image: {
        imageUrl: 'https://res.cloudinary.com/dpmszwgay/image/upload/v1764940017/Foodo_Merchants/rruonuwh8kh4x5nnfcir.jpg' // ✅ مش url
      }
    },
    {
      id: "4caa35c9-0661-4263-88af-3c2d41ab60d9",
      name: 'McDonald\'s',
      description: 'McDonald’s',
      rating: 4.0,
      categories: [
        { category: 'FastFood' },
        { category: 'American' },
        { category: 'Cafe' }
      ],
      image: {
        imageUrl: 'https://res.cloudinary.com/dpmszwgay/image/upload/v1764341561/Foodo_Merchants/zt6fnfqtiztld8oc8mkx.webp'
      }
    },
    {
      id: "7fe3428b-328c-4330-b12b-156731975f3e",
      name: 'testingStore',
      description: 'testing',
      rating: 3.5,
      categories: [
        { category: 'FastFood' },
        { category: 'CasualDining' }
      ],
      image: {
        imageUrl: 'https://res.cloudinary.com/dpmszwgay/image/upload/v1764338808/Foodo_Merchants/b1oty1yxixsnrfzrl1eu.jpg'
      }
    }
  ];
currentPage: any;
pageSize: any;
totalItems: any;

  constructor() {}
}
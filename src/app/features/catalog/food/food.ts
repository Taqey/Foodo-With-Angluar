import { Component, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { FoodFilter } from '../components/food-filter/food-filter';
import { Search } from '../../../shared/components/search/search';
import { Sort, SortOption } from '../../../shared/components/sort/sort';
import { IProduct } from '../../../core/models/iproduct';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../../core/services/ProductService/product-service';
import { PaginationComponent } from '../../../shared/components/pagination/pagination';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food',
  imports: [FoodFilter, Search, Sort, RouterLink, PaginationComponent, CommonModule],
  templateUrl: './food.html',
  styleUrl: './food.css',
})
export class Food implements OnInit {
  @Input() sort: SortOption[] = [
    { name: 'Name (A → Z)', value: 'name_asc' },
    { name: 'Name (Z → A)', value: 'name_desc' },
    { name: 'Rating (High → Low)', value: 'rating_desc' },
    { name: 'Rating (Low → High)', value: 'rating_asc' },
    { name: 'Price (Low → High)', value: 'price_asc' },
    { name: 'Price (High → Low)', value: 'price_desc' },
  ];
  ngOnInit(): void {
    this.loadProducts();
  }
  // currentPage: any;
  // pageSize: any;
  totalItems: number = 0;
  totalPages: number = 0;

  currentPage: number = 1;

  pageSize: number = 5;
  category!:number;
  getMainImage(product: IProduct): string {
    const main = product.urls?.find((img) => img.isMain);
    return main?.url || product.urls?.[0]?.url || '';
  }

  getCategories(product: IProduct): string {
    return product.productCategories?.join(' • ') || '';
  }

  productlist: WritableSignal<IProduct[]> = signal([]);
  constructor(private _ProductService: ProductService) {}
  onPageChange(newPage: number) {
    this.currentPage = newPage;
    this.loadProducts(); // استدعاء API حسب newPage
  }

onCategorySelected(category: number) {
  this.category = category;
  this.loadProducts();
}
  loadProducts() {
    this._ProductService.getProducts(this.currentPage, this.pageSize,this.category).subscribe((res) => {
      console.log(res); // 👈 اطبع ده

      this.productlist.set(res.data.items);
      this.totalItems = res.data.totalItems;
      this.totalPages = res.data.totalPages;
    });
  }

  onPageSizeChange(newSize: number) {
    this.pageSize = newSize;
    this.currentPage = 1; // ترجع أول صفحة
    this.loadProducts();
  }
}

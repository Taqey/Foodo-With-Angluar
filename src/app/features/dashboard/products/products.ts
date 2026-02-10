import { Component } from '@angular/core';
import { DashboardHeader } from "../components/dashboard-header/dashboard-header";
import { FoodFilter } from "../../../shared/components/food-filter/food-filter";
import { Pagination } from "../../../shared/components/pagination/pagination";

@Component({
  selector: 'app-products',
  imports: [DashboardHeader, FoodFilter, Pagination],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

}

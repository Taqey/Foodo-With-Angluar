import { Component } from '@angular/core';
import { OrderFilter } from "./components/order-filter/order-filter";
import { OrderTable } from "./components/order-table/order-table";
import { MerchantOrderStats } from "./components/merchant-order-stats/merchant-order-stats";
import { DashboardHeader } from '../components/dashboard-header/dashboard-header';
import { Pagination } from "../../../shared/components/pagination/pagination";

@Component({
  selector: 'app-orders',
  imports: [OrderFilter, OrderTable, MerchantOrderStats, DashboardHeader, Pagination],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {

}

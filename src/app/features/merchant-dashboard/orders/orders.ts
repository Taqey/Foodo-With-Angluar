import { Component } from '@angular/core';
import { OrderFilter } from "./components/order-filter/order-filter";
import { OrderTable } from "./components/order-table/order-table";
import { MerchantOrderStats } from "./components/merchant-order-stats/merchant-order-stats";
import { DashboardHeader } from '../components/dashboard-header/dashboard-header';

@Component({
  selector: 'app-orders',
  imports: [OrderFilter, OrderTable, MerchantOrderStats, DashboardHeader, ],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {

}

import { Component } from '@angular/core';
import { RevenueSnapshot } from "./components/revenue-snapshot/revenue-snapshot";
import { ActiveOrdersSnapshot } from "./components/active-orders-snapshot/active-orders-snapshot";
import { PendingOrdersSnapshot } from "./components/pending-orders-snapshot/pending-orders-snapshot";
import { CustomersSnapshot } from "./components/customers-snapshot/customers-snapshot";
import { WeeklyChartSnapshot } from "./components/weekly-chart-snapshot/weekly-chart-snapshot";
import { DashboardHeader } from "./components/dashboard-header/dashboard-header";

@Component({
  selector: 'app-dashboard',
  imports: [RevenueSnapshot, ActiveOrdersSnapshot, PendingOrdersSnapshot, CustomersSnapshot, WeeklyChartSnapshot, DashboardHeader],
  templateUrl: './merchant-dashboard.html',
  styleUrl: './merchant-dashboard.css',
})
export class Dashboard {

}

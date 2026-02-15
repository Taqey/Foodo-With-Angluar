import { Component } from '@angular/core';
import { CustomerTable } from "./components/customer-table/customer-table";
import { CustomerFilter } from "./components/customer-filter/customer-filter";
import { DashboardHeader } from "../components/dashboard-header/dashboard-header";

@Component({
  selector: 'app-customers',
  imports: [CustomerTable, CustomerFilter, DashboardHeader],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers {

}

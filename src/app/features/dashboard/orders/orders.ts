import { Component } from '@angular/core';
import { PendingOrderSnapshot } from "../../../shared/components/pending-order-snapshot/pending-order-snapshot";
import { PreparingOrderSnapshot } from "../../../shared/components/preparing-order-snapshot/preparing-order-snapshot";
import { ReadyOrderSnapshot } from "../../../shared/components/ready-order-snapshot/ready-order-snapshot";
import { DeliveredOrderSnapshot } from "../../../shared/components/delivered-order-snapshot/delivered-order-snapshot";
import { CancelledOrderSnapshot } from "../../../shared/components/cancelled-order-snapshot/cancelled-order-snapshot";
import { OrderFilter } from "./components/order-filter/order-filter";
import { OrderTable } from "./components/order-table/order-table";
import { MerchantOrderStats } from "./components/merchant-order-stats/merchant-order-stats";

@Component({
  selector: 'app-orders',
  imports: [ OrderFilter, OrderTable, MerchantOrderStats],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {

}

import { Component } from '@angular/core';
import { PendingOrderSnapshot } from "../../../../../shared/components/pending-order-snapshot/pending-order-snapshot";
import { PreparingOrderSnapshot } from "../../../../../shared/components/preparing-order-snapshot/preparing-order-snapshot";
import { ReadyOrderSnapshot } from "../../../../../shared/components/ready-order-snapshot/ready-order-snapshot";
import { CancelledOrderSnapshot } from "../../../../../shared/components/cancelled-order-snapshot/cancelled-order-snapshot";
import { DeliveredOrderSnapshot } from "../../../../../shared/components/delivered-order-snapshot/delivered-order-snapshot";

@Component({
  selector: 'app-merchant-order-stats',
  imports: [PendingOrderSnapshot, PreparingOrderSnapshot, ReadyOrderSnapshot, CancelledOrderSnapshot, DeliveredOrderSnapshot],
  templateUrl: './merchant-order-stats.html',
  styleUrl: './merchant-order-stats.css',
})
export class MerchantOrderStats {

}

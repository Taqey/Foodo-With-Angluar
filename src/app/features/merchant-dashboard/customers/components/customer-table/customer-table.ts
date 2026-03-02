import { Component } from '@angular/core';
import { PaginationComponent } from "../../../../../shared/components/pagination/pagination";

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.html',
  styleUrl: './customer-table.css',
  imports: [PaginationComponent],
})
export class CustomerTable {
currentPage: any;
pageSize: any;
totalItems: any;
onPageChange($event: Event) {
throw new Error('Method not implemented.');
}
onPageSizeChange($event: Event) {
throw new Error('Method not implemented.');
}

}

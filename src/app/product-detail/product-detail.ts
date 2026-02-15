import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Products } from '../features/merchant-dashboard/products/products';
import { IProduct } from '../features/merchant-dashboard/models/iproduct';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  // product: IProduct | undefined;

  // constructor(private route: ActivatedRoute, private productsComp: Products) {}

  // ngOnInit(): void {
  //   const id = this.route.snapshot.paramMap.get('id');

  //   if (id) {
  //     // جلب المنتج من الـ productlist
  //     this.product = this.productsComp.productlist.find(p => p.id === +id);
  //   }
  // }
}

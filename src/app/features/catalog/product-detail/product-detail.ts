import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IProduct } from '../../../core/models/iproduct';
import { ProductService } from '../../../core/services/ProductService/product-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink,CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit {
  product: WritableSignal<IProduct | null> = signal(null);
    selectedImage: WritableSignal<string | null> = signal(null);
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    const id = Number(idParam);

    this.productService.getProductById(id).subscribe((res) => {
      this.product.set(res);
      const main = res.urls?.find((img) => img.isMain);
      this.selectedImage.set(main?.url || res.urls?.[0]?.url || 'fallback.jpg');    });
  }


  get thumbnails(): string[] {
    return this.product()?.urls?.map((img) => img.url || 'fallback.jpg') || [];
  }

  onThumbnailClick(url: string) {
    this.selectedImage.set(url);
  }
}

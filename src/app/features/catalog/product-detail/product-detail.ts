import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IProduct } from '../../../core/models/iproduct';
import { ProductService } from '../../../core/services/ProductService/product-service';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../../core/models/cart-item';
import { CartService } from '../../../core/services/CartService/cart-service';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink, CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit {
  product: WritableSignal<IProduct | null> = signal(null);
  selectedImage: WritableSignal<string | null> = signal(null);

  private cartService = inject(CartService);

  quantity = signal(1);
  warningMessage = signal<string | null>(null);

  cartItems = this.cartService.cartItems;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);

    this.productService.getProductById(id).subscribe((res) => {
      this.product.set(res);

      const main = res.urls?.find((img) => img.isMain);
      this.selectedImage.set(main?.url || res.urls?.[0]?.url || 'fallback.jpg');
    });
  }

  get thumbnails(): string[] {
    return this.product()?.urls?.map((img) => img.url || 'fallback.jpg') || [];
  }

  onThumbnailClick(url: string) {
    this.selectedImage.set(url);
  }

  increaseQuantity() {
    this.quantity.update((value) => value + 1);
  }

  decreaseQuantity() {
    this.quantity.update((value) => (value > 1 ? value - 1 : 1));
  }

  addToCart() {
    const prod = this.product();
    if (!prod) return;

    const cartItem: CartItem = {
      productId: Number(prod.productId),
      productName: prod.productName || '',
      productDescription: prod.productDescription,
      price: Number(prod.price),
      image: this.selectedImage() || this.getMainImage(prod),
      quantity: this.quantity(),
      restaurantName: prod.storeName?.toString() || null,
      restaurantId: prod.storeId?.toString() || null,
    };

    const result = this.cartService.addToCartWithQuantity(cartItem);

    if (!result.success) {
      this.showWarning(result.message || 'You cannot add items from different restaurants.');
      return;
    }

    this.quantity.set(1);
    this.router.navigate(['/restaurants', prod.storeId]);
  }

  showWarning(message: string) {
    this.warningMessage.set(message);

    setTimeout(() => {
      this.warningMessage.set(null);
    }, 3000);
  }

  getMainImage(prod: IProduct): string {
    return (
      prod?.urls?.find((img) => img.isMain)?.url ||
      prod?.urls?.[0]?.url ||
      'https://via.placeholder.com/300'
    );
  }
  getRestaurantId() {
    return this.product()?.storeId?.toString() || '';
  }
  getRestaurantName() {
    return this.product()?.storeName?.toString() || ''; }
}

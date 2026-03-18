import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RestaurantService } from '../../../core/services/RestaurantService/restaurant-service';
import { ProductService } from '../../../core/services/ProductService/product-service';
import { ShopDto } from '../../../core/models/irestaurant';
import { IProduct } from '../../../core/models/iproduct';
import { CartItem } from '../../../core/models/cart-item';
import { CartService } from '../../../core/services/CartService/cart-service';

@Component({
  selector: 'app-restaurant-detail',
  imports: [RouterLink],
  templateUrl: './restaurant-detail.html',
  styleUrl: './restaurant-detail.css',
})
export class RestaurantDetail implements OnInit {
  idParam: string | null = null;
  restaurant: WritableSignal<ShopDto | null> = signal(null);
  productlist: WritableSignal<IProduct[]> = signal([]);

  private cartService = inject(CartService);

  cartItems = this.cartService.cartItems;
  subtotal = this.cartService.subtotal;
  deliveryFee = this.cartService.deliveryFee;
  total = this.cartService.total;
  totalQuantity = this.cartService.totalQuantity;

  warningMessage = signal<string | null>(null);

  constructor(
    private _RestaurantService: RestaurantService,
    private _productService: ProductService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.idParam = this.route.snapshot.paramMap.get('id');
    this.loadRestaurantDetails();
  }

  loadRestaurantDetails() {
    if (!this.idParam) {
      console.error('ID is missing');
      return;
    }

    this._RestaurantService.getRestaurantById(this.idParam).subscribe((response) => {
      this.restaurant.set(response.data || null);
    });

    this._productService.getProducts(1, 100, 0, 0, 0, this.idParam).subscribe((response) => {
      this.productlist.set(response.data?.items || []);
    });
  }

  getMainImage(product: IProduct): string {
    const main = product.urls?.find((img) => img.isMain);
    return main?.url || product.urls?.[0]?.url || '';
  }

  addProductToCart(item: IProduct) {
    const currentRestaurantId =
      this.restaurant()?.shopId?.toString() ||
      '';

    const cartItem: CartItem = {
      productId: Number(item.productId),
      productName: item.productName || '',
      productDescription: item.productDescription,
      price: Number(item.price),
      image: this.getMainImage(item),
      quantity: 1,
      restaurantId: currentRestaurantId
    };

    const result = this.cartService.addToCart(cartItem);

    if (!result.success) {
      this.showWarning(
        result.message || 'You cannot add items from different restaurants.'
      );
    }
  }

  increase(productId: number) {
    this.cartService.increaseQuantity(productId);
  }

  decrease(productId: number) {
    this.cartService.decreaseQuantity(productId);
  }

  remove(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  showWarning(message: string) {
    this.warningMessage.set(message);

    setTimeout(() => {
      this.warningMessage.set(null);
    }, 3000);
  }
  isCheckoutAnimating = signal(false);

handleCheckout() {
  if (this.cartItems().length === 0 || this.isCheckoutAnimating()) return;

  this.isCheckoutAnimating.set(true);

  setTimeout(() => {
    this.isCheckoutAnimating.set(false);

    // حط هنا منطق الـ checkout الحقيقي
    // مثال:
    // this.router.navigate(['/checkout']);
  }, 900);
}
}
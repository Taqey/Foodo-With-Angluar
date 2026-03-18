import { Injectable, computed, signal } from '@angular/core';
import { CartItem } from '../../models/cart-item';

const CART_KEY = 'foodo_cart';
const CART_RESTAURANT_KEY = 'foodo_cart_restaurant';

type CartRestaurantInfo = {
  id?: string | null;
  name?: string | null;
};

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSignal = signal<CartItem[]>(this.loadCartFromStorage());
  private restaurantSignal = signal<CartRestaurantInfo | null>(this.loadRestaurantFromStorage());

  cartItems = this.cartItemsSignal.asReadonly();
  restaurant = this.restaurantSignal.asReadonly();

  subtotal = computed(() =>
    this.cartItemsSignal().reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  deliveryFee = computed(() => (this.cartItemsSignal().length > 0 ? 20 : 0));

  total = computed(() => this.subtotal() + this.deliveryFee());

  totalQuantity = computed(() =>
    this.cartItemsSignal().reduce((sum, item) => sum + item.quantity, 0)
  );

  private normalizeName(name?: string | null): string {
    return (name || '').trim().toLowerCase().replace(/\s+/g, ' ');
  }

  private loadCartFromStorage(): CartItem[] {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  }

  private saveCartToStorage(items: CartItem[]) {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }

  private loadRestaurantFromStorage(): CartRestaurantInfo | null {
    const data = localStorage.getItem(CART_RESTAURANT_KEY);
    return data ? JSON.parse(data) : null;
  }

  private saveRestaurantToStorage(restaurant: CartRestaurantInfo | null) {
    if (restaurant) {
      localStorage.setItem(CART_RESTAURANT_KEY, JSON.stringify(restaurant));
    } else {
      localStorage.removeItem(CART_RESTAURANT_KEY);
    }
  }

  private isSameRestaurant(
    currentRestaurant: CartRestaurantInfo | null,
    incomingRestaurant: CartRestaurantInfo
  ): boolean {
    if (!currentRestaurant) return true;

    const currentId = currentRestaurant.id?.toString().trim();
    const incomingId = incomingRestaurant.id?.toString().trim();

    const currentName = this.normalizeName(currentRestaurant.name);
    const incomingName = this.normalizeName(incomingRestaurant.name);

    // 1) لو الاتنين عندهم id وقيمتهم متساوية -> نفس المطعم
    if (currentId && incomingId && currentId === incomingId) {
      return true;
    }

    // 2) لو id مش متاح في واحد منهم أو الاتنين، قارن بالاسم
    if (currentName && incomingName && currentName === incomingName) {
      return true;
    }

    // 3) غير كده -> مطعم مختلف
    return false;
  }

  addToCart(item: CartItem): { success: boolean; message?: string } {
    return this.addToCartWithQuantity({ ...item, quantity: 1 });
  }

  addToCartWithQuantity(item: CartItem): { success: boolean; message?: string } {
    const currentRestaurant = this.restaurantSignal();

    const incomingRestaurant: CartRestaurantInfo = {
      id: item.restaurantId?.toString() || null,
      name: item.restaurantName || null
    };

    if (!this.isSameRestaurant(currentRestaurant, incomingRestaurant)) {
      return {
        success: false,
        message: 'You cannot add items from different restaurants.'
      };
    }

    const currentItems = [...this.cartItemsSignal()];
    const existingIndex = currentItems.findIndex(x => x.productId === item.productId);

    if (existingIndex !== -1) {
      currentItems[existingIndex] = {
        ...currentItems[existingIndex],
        quantity: currentItems[existingIndex].quantity + item.quantity
      };
    } else {
      currentItems.push({
        ...item
      });
    }

    this.cartItemsSignal.set(currentItems);

    // خزن أفضل معلومات متاحة عن المطعم
    const mergedRestaurant: CartRestaurantInfo = {
      id: currentRestaurant?.id || incomingRestaurant.id || null,
      name: currentRestaurant?.name || incomingRestaurant.name || null
    };

    this.restaurantSignal.set(mergedRestaurant);

    this.saveCartToStorage(currentItems);
    this.saveRestaurantToStorage(mergedRestaurant);

    return { success: true };
  }

  increaseQuantity(productId: number) {
    const updated = this.cartItemsSignal().map(item =>
      item.productId === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    this.cartItemsSignal.set(updated);
    this.saveCartToStorage(updated);
  }

  decreaseQuantity(productId: number) {
    const updated = this.cartItemsSignal()
      .map(item =>
        item.productId === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0);

    this.cartItemsSignal.set(updated);
    this.saveCartToStorage(updated);

    if (updated.length === 0) {
      this.restaurantSignal.set(null);
      this.saveRestaurantToStorage(null);
    }
  }

  removeFromCart(productId: number) {
    const updated = this.cartItemsSignal().filter(item => item.productId !== productId);

    this.cartItemsSignal.set(updated);
    this.saveCartToStorage(updated);

    if (updated.length === 0) {
      this.restaurantSignal.set(null);
      this.saveRestaurantToStorage(null);
    }
  }

  clearCart() {
    this.cartItemsSignal.set([]);
    this.restaurantSignal.set(null);

    localStorage.removeItem(CART_KEY);
    localStorage.removeItem(CART_RESTAURANT_KEY);
  }
}
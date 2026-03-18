export interface CartItem {
      productId: number;
  productName: string;
  productDescription?: string | null;
  price: number;
  image: string;
  quantity: number;
  restaurantId?: string | null;
    restaurantName?: string | null;

}

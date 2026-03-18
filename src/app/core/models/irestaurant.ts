import { IRestaurantCategory } from './irestaurant-category';
import { IRestaurantImage } from './irestaurant-image';

export interface ShopDto {
  categories?: string[] | null;
  shopDescription?: string | null;
  shopId?: string | null;
  shopName?: string | null;
  url?: string | null;
}
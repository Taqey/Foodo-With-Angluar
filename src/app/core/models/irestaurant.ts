import { IRestaurantCategory } from './irestaurant-category';
import { IRestaurantImage } from './irestaurant-image';

export interface IRestaurant {
  id: string;
  name: string;
  description: string;
  rating?: number;
  categories: IRestaurantCategory[];
  image: IRestaurantImage;
}

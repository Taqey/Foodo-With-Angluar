import { attributes } from "../../../models/iattributes";

export interface CreateProductRequest {
      productName: string;
  productDescription: string;
  price: string;
      attributes: attributes[];
  categories: number[];
}

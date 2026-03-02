import { IProductAttribute } from "../../../models/iproduct-attribute";

export interface CreateProductRequest {
      productName: string;
  productDescription: string;
  price: string;
      attributes: IProductAttribute[];
  categories: number[];
}

import { attributes } from "./iattributes";
import { ProductDetailAttributeDto } from "./iproduct-detail-attribute-dto";
import { ProductPhotosDto } from "./iproduct-photos-dto";



export interface IProduct {
    price?: number;
    storeName:String;
    productCategories?: string[] | null;
    productDescription?: null | string;
    productDetailAttributes?: ProductDetailAttributeDto[] | null;
    attributes:attributes[]|null
    productId?: number;
    productName?: null | string;
    urls?: ProductPhotosDto[] | null;
}


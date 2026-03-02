import { IProductAttribute } from './iproduct-attribute';
import { IProductCategory } from './iproduct-category';
import { IProductImage } from './iproduct-image';

/**
 * MerchantProductDto
 */
export interface IProduct {
    price?: number;
    storeName:String;
    productCategories?: string[] | null;
    productDescription?: null | string;
    productDetailAttributes?: ProductDetailAttributeDto[] | null;
    productId?: number;
    productName?: null | string;
    urls?: ProductPhotosDto[] | null;
}

/**
 * ProductDetailAttributeDto
 */
export interface ProductDetailAttributeDto {
    attributeName?: null | string;
    attributeValue?: null | string;
    id?: number;
    measurementUnit?: null | string;
}

/**
 * ProductPhotosDto
 */
export interface ProductPhotosDto {
    isMain?: boolean;
    url?: null | string;
}
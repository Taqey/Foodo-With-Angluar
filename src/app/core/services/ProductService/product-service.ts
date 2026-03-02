import { Injectable } from '@angular/core';
import { AddAttributesRequest } from '../../dto/request/product/add-attributes-request';
import { CreateProductRequest } from '../../dto/request/product/create-product-request';
import { RemoveAttributesRequest } from '../../dto/request/product/remove-attributes-request';
import { UpdateCategoriesRequest } from '../../dto/request/product/update-categories-request';
import { UpdateProductRequest } from '../../dto/request/product/update-product-request';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/iproduct';
import { IPaginatedResponse } from '../../models/ipaginated-response';

@Injectable({
  providedIn: 'root',
})

export class ProductService {

    private baseUrl = `${environment.apiUrl}/Products`;
  constructor(private _http: HttpClient) {}

  // ==============================
  // Products
  // ==============================

  getProducts(
    pageNumber?: number,
    pageSize?: number,
    categoryId?: number,
    restaurantId?: string,
    orderBy?: number,
    orderingDirection?: number,
  ): Observable<IPaginatedResponse<IProduct>> {
      let params = new HttpParams();

  if (pageNumber != null) params = params.set('pageNumber', pageNumber.toString());
  if (pageSize != null) params = params.set('pageSize', pageSize.toString());
  if (categoryId != null && categoryId!=0) params = params.set('categoryId', categoryId.toString());
  if (restaurantId) params = params.set('restaurantId', restaurantId);
  if (orderBy != null) params = params.set('orderBy', orderBy.toString());
  if (orderingDirection != null) params = params.set('orderingDirection', orderingDirection.toString());

  // استدعاء الـ API
  return this._http.get<IPaginatedResponse<IProduct>>(this.baseUrl, { params });  }
  
  getProductById(id: number): Observable<IProduct> {
    return this._http.get<IProduct>(`${this.baseUrl}/${id}`);
  }

  createProduct(request: CreateProductRequest): void {}

  updateProduct(id: number, request: UpdateProductRequest): void {}

  deleteProduct(id: number): void {}

  // ==============================
  // Attributes
  // ==============================

  addAttributes(productId: number, request: AddAttributesRequest): void {}

  removeAttributes(productId: number, request: RemoveAttributesRequest): void {}

  // ==============================
  // Categories
  // ==============================

  addCategories(productId: number, request: UpdateCategoriesRequest): void {}

  removeCategories(productId: number, request: UpdateCategoriesRequest): void {}

  // ==============================
  // Photos
  // ==============================

  uploadPhotos(productId: string, files: File[]): void {}

  deletePhotos(productId: string, files: string[]): void {}

  setMainPhoto(photoId: number): void {}
}

// export interface ProductAttributeDto {
//   name: string;
//   value: string;
//   measurementUnit: string;
// }
export const environment = {
  apiUrl: 'https://localhost:7098/api'
};

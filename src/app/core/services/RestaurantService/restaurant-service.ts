import { Injectable } from '@angular/core';
import { ApiResponse } from '../../models/api-response';
import { Observable } from 'rxjs';
import { environment } from '../ProductService/product-service';
import { ShopDto } from '../../models/irestaurant';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPaginatedResponse } from '../../models/ipaginated-response';
import { IMerchantProfile } from '../../models/imerchant-profile';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private http: HttpClient) {}
  getRestaurantById(id: string): Observable<ApiResponse<ShopDto>> {
    return this.http.get<ApiResponse<ShopDto>>(`${environment.apiUrl}/Restaurants/${id}`);
  }


  getRestaurants(
    pageNumber?: number,
    pageSize?: number,
    categoryId?: number,
  ): Observable<ApiResponse<IPaginatedResponse<ShopDto>>> {
    let params = new HttpParams();

    if (pageNumber != null) params = params.set('pageNumber', pageNumber);
    if (pageSize != null) params = params.set('pageSize', pageSize);
  if (categoryId != null && categoryId!=0) params = params.set('categoryId', categoryId.toString());

    return this.http.get<ApiResponse<IPaginatedResponse<ShopDto>>>(`${environment.apiUrl}/Restaurants`, {
      params,
    });
  }

  
  getProfile(): Observable<ApiResponse<IMerchantProfile>> {
    return this.http.get<ApiResponse<IMerchantProfile>>(`${environment.apiUrl}/Restaurants/profile`);
  }
}

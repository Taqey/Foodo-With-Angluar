import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Address {
  city: string;
  state: string;
  streetAddress: string;
  postalCode: string;
  country: string;
}

@Injectable({
  providedIn: 'root',
})
export class AdressService {

  // Add new address
  addAddress(addresses: Address[]): Observable<void> {
    throw new Error('Method not implemented.');
  }

  // Delete address by id
  deleteAddress(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }

  // Set address as default
  setDefaultAddress(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }

}
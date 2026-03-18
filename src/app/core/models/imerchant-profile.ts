export interface IMerchantProfile {
      storeName: string;
  storeDescription: string;
  email: string;
  isEmailConfirmed: boolean;
  adresses: IAddress[];
  categories: string[];
}
export interface IAddress {
  id: number;
  city: string;
  state: string;
  streetAddress: string;
  postalCode: string;
  country: string;
}
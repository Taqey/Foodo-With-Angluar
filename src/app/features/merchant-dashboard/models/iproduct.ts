import { IProducAttribute } from "./iproduc-attribute";
import { IProductCategory } from "./iproduct-category";
import { IProductImage } from "./iproduct-image";

export interface IProduct {
    id:number;
    name:string;
    description:string;
    price:number;
    restaurant?:string;
    rating?:number;
    
    categories:IProductCategory[];
    attributes:IProducAttribute[];
    images:IProductImage[];
    


}

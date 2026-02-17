import { Component } from '@angular/core';
import { DashboardHeader } from "../components/dashboard-header/dashboard-header";
import { FoodFilter } from '../../catalog/components/food-filter/food-filter';
import { Pagination } from "../../../shared/components/pagination/pagination";
import { IProduct } from '../../../core/models/iproduct';

@Component({
  selector: 'app-products',
  imports: [DashboardHeader, FoodFilter, Pagination],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  getMainImage(product: IProduct): string {
  const main = product.images.find(img => img.isMain);
  return main?.imageUrl || product.images[0]?.imageUrl || '';
}

getCategories(product: IProduct): string {
  return product.categories.map(c => c.category).join(' • ');
}

  productlist :IProduct[];
  constructor(){
this.productlist = [
  {
    id: 2,
    name: "Cheese burger sandwich",
    description: "لل",
    price: 50,
    categories: [
      { category: "Burger" },
      { category: "Sandwich" }
    ],
    attributes: [
      { name: "Weight", value: "100", measurementUnit: "grams" },
      { name: "Spice Level", value: "Mild", measurementUnit: "level" },
      { name: "Cooking Preference", value: "Well Done", measurementUnit: "option" },
      { name: "Cheese Type", value: "Cheddar", measurementUnit: "option" },
      { name: "Protein Type", value: "Beef", measurementUnit: "option" },
      { name: "Bread Type", value: "White Bread", measurementUnit: "option" }
    ],
    images: [
      {
        imageUrl: "https://res.cloudinary.com/dpmszwgay/image/upload/v1764340440/Foodo_Products/we8zcqehqm0eylhppd7c.jpg",
        isMain: true
      },
      {
        imageUrl: "https://res.cloudinary.com/dpmszwgay/image/upload/v1764340441/Foodo_Products/u2rxqca4vo5skjqhbxgv.jpg",
        isMain: false
      }
    ]
  },

  {
    id: 5,
    name: "Big Mac Burger",
    description: "It starts with two 100% Aussie beef patties...",
    price: 99.98,
    categories: [
      { category: "Burger" },
      { category: "Sandwich" }
    ],
    attributes: [
      { name: "Weight", value: "200", measurementUnit: "grams" },
      { name: "Spice Level", value: "Mild", measurementUnit: "level" },
      { name: "Cooking Preference", value: "Well Done", measurementUnit: "option" },
      { name: "Cheese Type", value: "Cheddar", measurementUnit: "option" },
      { name: "Protein Type", value: "Beef", measurementUnit: "option" },
      { name: "Bread Type", value: "White Bread", measurementUnit: "option" },
      { name: "Sauce", value: "Extra Sauce", measurementUnit: "option" },
      { name: "Vegetables", value: "Light Veggies", measurementUnit: "option" },
      { name: "Combo Option", value: "Sandwich Only", measurementUnit: "option" },
      { name: "Sauce Amount", value: "Normal", measurementUnit: "level" },
      { name: "Onion Type", value: "Raw", measurementUnit: "option" }
    ],
    images: [
      {
        imageUrl: "https://res.cloudinary.com/dpmszwgay/image/upload/v1764357158/Foodo_Products/nvgyev6meulay8syawkl.avif",
        isMain: false
      },
      {
        imageUrl: "https://res.cloudinary.com/dpmszwgay/image/upload/v1764357159/Foodo_Products/q31dxzrksvlszcajpn2u.png",
        isMain: false
      }
    ]
  },

  {
    id: 18,
    name: "Vanilla Cone",
    description: "Sweet, creamy vanilla soft serve in a crispy cone.",
    price: 19.99,
    categories: [{ category: "IceCream" }],
    attributes: [
      { name: "Sugar Level", value: "Sweet", measurementUnit: "level" },
      { name: "Milk Type", value: "Oat Milk", measurementUnit: "option" }
    ],
    images: [
      {
        imageUrl: "https://res.cloudinary.com/dpmszwgay/image/upload/v1764438165/Foodo_Products/dtvieulej3gndi1h0n3f.png",
        isMain: true
      },
      {
        imageUrl: "https://res.cloudinary.com/dpmszwgay/image/upload/v1764438166/Foodo_Products/cdmttxg6wnvqbkh6klja.png",
        isMain: false
      }
    ]
  },

  {
    id: 26,
    name: "string",
    description: "string",
    price: 95,
    categories: [{ category: "Burger" }],
    attributes: [
      { name: "string", value: "string", measurementUnit: "string" }
    ],
    images: [
      {
        imageUrl: "https://res.cloudinary.com/dpmszwgay/image/upload/v1764606585/Foodo_Products/ilkoazg2v0d31n1v3z0z.avif",
        isMain: false
      },
      {
        imageUrl: "https://res.cloudinary.com/dpmszwgay/image/upload/v1764606587/Foodo_Products/uotld0czedjrmlf7rtmx.png",
        isMain: true
      }
    ]
  },

  {
    id: 29,
    name: "المزة مزتى",
    description: "اوف اح ده هوهوز محشى كريمة",
    price: 0.19,
    categories: [{ category: "Dessert" }],
    attributes: [
      { name: "Size", value: "Small", measurementUnit: "option" },
      { name: "Servings", value: "1", measurementUnit: "persons" },
      { name: "Sugar Level", value: "Medium", measurementUnit: "level" },
      { name: "Fruits", value: "Mixed Fruits", measurementUnit: "option" }
    ],
    images: [
      {
        imageUrl: "https://res.cloudinary.com/dpmszwgay/image/upload/v1764952575/Foodo_Products/iciskhz1iziof74kt6fb.jpg",
        isMain: true
      }
    ]
  },

  {
    id: 30,
    name: "Om Mohamed",
    description: "A mix of ice cream and rice pudding with nuts",
    price: 0.15,
    categories: [{ category: "IceCream" }],
    attributes: [
      { name: "Sugar Level", value: "Sweet", measurementUnit: "level" },
      { name: "Milk Type", value: "Coconut Milk", measurementUnit: "option" },
      { name: "Nuts", value: "Peanuts", measurementUnit: "option" }
    ],
    images: [
      {
        imageUrl: "https://res.cloudinary.com/dpmszwgay/image/upload/v1764957100/Foodo_Products/bfmj3wuth5xlmwzgbmnz.jpg",
        isMain: true
      }
    ]
  }
];

  }
}

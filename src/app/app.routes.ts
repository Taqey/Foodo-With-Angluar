import { Routes } from '@angular/router';
import { Landing } from './features/landing/landing';
import { Register } from './features/auth/register/register';
import { Login } from './features/auth/login/login';
import { DashboardLayout } from './layouts/dashboard-layout/dashboard-layout';
import { Dashboard } from './features/merchant-dashboard/merchant-dashboard';
import { Orders } from './features/merchant-dashboard/orders/orders';
import { Products } from './features/merchant-dashboard/products/products';
import { Customers } from './features/merchant-dashboard/customers/customers';
import { Settings } from './features/merchant-dashboard/settings/settings';
import { Analytics } from './features/merchant-dashboard/analytics/analytics';
import { Restaurant } from './features/catalog/restaurant/restaurant';
import { Food } from './features/catalog/food/food';
import { LandingLayout } from './layouts/landing-layout/landing-layout';
import { ProductDetail } from './features/catalog/product-detail/product-detail';

export const routes: Routes = [
  {
    path: 'merchant-dashboard',
    component: DashboardLayout, // <-- هنا Layout
    children: [
      // كل Pages تظهر جوا Router Outlet
      { path: '', component: Dashboard },
      { path: 'orders', component: Orders },
      { path: 'products', component: Products },
      { path: 'customers', component: Customers },
      { path: 'settings', component: Settings },
      { path: 'analytics', component: Analytics },
    ],
  },
  {
    path: '',
    component: LandingLayout,
    children: [
      { path: '', component: Landing }, // هنا الصفحة الرئيسية
      { path: 'restaurants', component: Restaurant },
      { path: 'food', component: Food },
      { path: 'food/:id', component: ProductDetail },
    ],
  },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
];

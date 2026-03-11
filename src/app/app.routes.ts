import { Routes } from '@angular/router';
import { Landing } from './features/landing/landing';
import { Register } from './features/auth/register/register';
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
import { RestaurantDetail } from './features/catalog/restaurant-detail/restaurant-detail';
import { authGuardGuard } from './core/guards/authGuard/auth-guard-guard';
import { merchantguardGuard } from './core/guards/roleGuard/merchantguard-guard';
import { Login } from './features/auth/login/login';
import { Unauthorized } from './pages/errors/unauthorized/unauthorized';
import { TooManyRequests } from './pages/errors/too-many-requests/too-many-requests';
import { ServerError } from './pages/errors/server-error/server-error';
import { Forbidden } from './pages/errors/forbidden/forbidden';

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
    canActivate: [authGuardGuard, merchantguardGuard],
    data: { expectedRole: 'Merchant' },
  },
  {
    path: '',
    component: LandingLayout,
    children: [
      { path: '', component: Landing }, // هنا الصفحة الرئيسية
      { path: 'restaurants', component: Restaurant },
      { path: 'food', component: Food },
      { path: 'food/:id', component: ProductDetail },
      { path: 'restaurants/:id', component: RestaurantDetail },
      { path: 'error/401', component: Unauthorized },
      { path: 'error/429', component: TooManyRequests },
      { path: 'error/500', component: ServerError },
      { path: 'error/403', component: Forbidden },
    ],
  },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
];

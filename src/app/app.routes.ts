import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { DashboardLayout } from './layouts/dashboard-layout/dashboard-layout';
import { Dashboard } from './features/dashboard/dashboard';
import { Orders } from './features/dashboard/orders/orders';
import { Products } from './features/dashboard/products/products';
import { Customers } from './features/dashboard/customers/customers';
import { Settings } from './features/dashboard/settings/settings';
import { Analytics } from './features/dashboard/analytics/analytics';

export const routes: Routes = [
  {
    path: 'dashboard',
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
  { path: '', component: Landing },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
];

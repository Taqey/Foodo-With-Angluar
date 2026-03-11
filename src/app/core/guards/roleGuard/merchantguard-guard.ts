import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../../services/AuthenticationService/authentication-service';

export const merchantguardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthenticationService);
  const userRole = authService.getUserRole();
  if (userRole === 'Merchant') {
    return true;
  }
  return router.navigate(['/unauthorized']);
};

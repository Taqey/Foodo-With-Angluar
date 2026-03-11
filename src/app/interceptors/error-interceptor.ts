import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {

      switch (error.status) {
        // case 401:
        //   if (router.url !== '/error/401') {
        //     router.navigate(['/error/401']);
        //   }
        //   break;

        case 403:
          if (router.url !== '/error/403') {
            router.navigate(['/error/403']);
          }
          break;

        case 404:
          if (router.url !== '/error/404') {
            router.navigate(['/error/404']);
          }
          break;

        case 429:
          if (router.url !== '/error/429') {
            router.navigate(['/error/429']);
          }
          break;

        case 500:
          if (router.url !== '/error/500') {
            router.navigate(['/error/500']);
          }
          break;
      }

      return throwError(() => error);
    })
  );
};
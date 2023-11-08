
import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';

import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

 function checkAuthStatus(): Observable<boolean> {
   const authService = inject(AuthService);
   const router = inject(Router);
   return authService.checkAuthentication().pipe(
     tap((isAuthenticated) => {
       if (isAuthenticated) {router.navigate(['./'])}
     }),
     map(isAuthenticated=>!isAuthenticated)
   );
 }

export const publicGuardCanActivate: CanActivateFn = (route, state) => {
  return checkAuthStatus();
};

export const publicGuardCanMatch: CanMatchFn = () => {
 return checkAuthStatus();
};

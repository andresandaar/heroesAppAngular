import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';

import { Observable, tap } from 'rxjs';
import { AuthService } from 'src/app/public/auth/services/auth.service';



 function checkAuthStatus():Observable<boolean> {
 const authService = inject(AuthService);
 const router = inject(Router);
 return  authService.isLogged$.pipe(
   tap((isAuthenticated) => {
     if (!isAuthenticated) router.navigate(['./auth/login']);
   })
 );
}

export const authGuardCanActivate: CanActivateFn = (route, state) => {
 return checkAuthStatus()
};

export const authGuardCanMatch: CanMatchFn = () => {
 return checkAuthStatus();
};


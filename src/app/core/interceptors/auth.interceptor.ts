import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable,from,throwError,of } from 'rxjs';
import { map,switchMap,catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  /* Los interceptors modifican las peticiones (enpoints, servicios, o como lo quieras llamar)  */
  //https://medium.com/@insomniocode/angular-autenticaci%C3%B3n-usando-interceptors-a26c167270f4
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token') || '';
    return of(token).pipe(
      switchMap((token) => {
        if (token) {
          request = request.clone({
            headers: request.headers.set('Authorization', 'Bearer ' + token),
          });
          //request = request.clone({ headers: request.headers.set('Authorization', token) });
        }

        if (!request.headers.has('Content-Type')) {
          request = request.clone({
            headers: request.headers.set('Content-Type', 'application/json'),
          });
        }

        return next.handle(request).pipe(
          // copy the body and trim whitespace from the name property
          map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {

  
              // do nothing for now
            }
            return event;
          }),
          catchError((error: HttpErrorResponse) => {
            const status = error.status;
            const reason =
              error && error.error.message ? error.error.message : '';
            return throwError(error);
          })
        );
      })
    ) as Observable<HttpEvent<any>>;
  }
}

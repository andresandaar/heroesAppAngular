
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, catchError, map, of, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environments';
import { User } from '../interfaces/user.interface';
import { HttpsService } from 'src/app/services/https.service';
import { Auth, AuthResponse } from '../interfaces/auth.interface';
import { JwtHelperService } from "@auth0/angular-jwt";
const helper = new JwtHelperService
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user?: User;

  get currentUser(): User | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user);
  }

  private isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private httpsService: HttpsService) {
    this.checkToken();
  }

  // Observable para notificar cuando el usuario ha iniciado sesión
  get isLogged$(): Observable<boolean> {
    return this.isLogged.asObservable();
  }

  registrarUsuario(newUser: User): Observable<AuthResponse | void> {
    return this.httpsService
      .post(environment.andresApiRestBaseUrl + '/user/register', newUser)
      .pipe(
        map((resp) => resp.body),
        tap((res: AuthResponse) => this.saveToken(res.token)),
        tap(() => this.isLogged.next(true)),
        catchError((err) => this.handlerError(err))
      );
  }

  login(credentials: Auth): Observable<AuthResponse | void> {
    return this.httpsService
      .post(environment.andresApiRestBaseUrl + '/user/login', credentials)
      .pipe(
        map((resp) => resp.body),
        tap((res: AuthResponse) => this.saveToken(res.token)),
        tap(() => this.isLogged.next(true)),
        catchError((err) => this.handlerError(err))
      );
  }

  private checkToken() {
    const userToken = localStorage.getItem('token');
    const isExpired = helper.isTokenExpired(userToken);
    isExpired ? this.logout() : this.isLogged.next(true);
  }
  /*   checkAuthentication(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!token) return of(false);

    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
      tap((user) => (this.user = user)),
      map((user) => !!user),
      catchError((err) => of(false))
    );
  } */

  logout(): void {
    this.isLogged.next(false);
     localStorage.clear();
  }
  private saveToken(token: string) {
    localStorage.setItem('token', token);
  }
  private handlerError(error: { error: { message: any } }): Observable<never> {
    let errorMessage = 'An error occured retrienving data';
    console.log(error)
    if (error) {
      errorMessage = `${error.error.message}`;
    }
    //window.alert(errorMessage);
   return throwError(() => new Error(errorMessage));
  }
}

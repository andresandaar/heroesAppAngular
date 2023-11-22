import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Utilities } from '../utilities/utilities';
import { HttpsService } from './https.service';
import { Subject } from 'rxjs';
import { User } from '../auth/interfaces/user.interface';
import { Auth } from '../auth/interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {


  constructor(private httpsService: HttpsService) {}


  // Función para obtener información del usuario
  getUserInfo(idUser: any): Observable<any> {
    return this.httpsService.get(
      environment.andresApiRestBaseUrl + '/user/profile/' + idUser
    );
  }

/*   setLoginData(token: string) {
    localStorage.setItem('token', token);
    if (idToken) {
      let payload = Utilities.parseJwt(idToken);
      let nomApell = Utilities.getNomApell(
        payload.given_name,
        payload.family_name
      );
      localStorage.setItem('nomApell', nomApell);
      localStorage.setItem('photoUser', payload.picture);
    }
    this.setAuthWith(authWith);
    this.isAuthSubject.next(true);
  }

  checkAuthentication(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!token) return of(false);
    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
      tap((user) => (this.user = user)),
      map((user) => !!user),
      catchError((err) => of(false))
    );
  }

  isAuthenticated() {
    let email = localStorage.getItem('email');
    let token = localStorage.getItem('token');
    if (email && token && email != '' && token != '') {
      return true;
    } else {
      return false;
    }
  } */
  // Función para cerrar sesión

  /*  getTodosUsuarioAll() {
    return this.httpsService.get(
      environment.andresApiRestBaseUrl + '/usuario/all'
    );
  }

  getUsuarioByEmail(email: string | null) {
    return this.httpsService.get(
      environment.andresApiRestBaseUrl + '/buscar/usuario/email/' + email
    );
  }

  getDetail(id: number) {
    return this.httpsService.get(
      environment.andresApiRestBaseUrl + '/usuario/id/' + id
    );
  }

  actualizarUsuario(id: number, dataUser: any) {
    return this.httpsService.put(
      environment.andresApiRestBaseUrl + '/usuario/parcial/' + id,
      dataUser
    );
  }

  setLoginData(token: string, authWith: string, idToken?: string) {
    localStorage.setItem('token', token);
    if (idToken) {
      let payload = Utilities.parseJwt(idToken);
      let nomApell = Utilities.getNomApell(
        payload.given_name,
        payload.family_name
      );
      localStorage.setItem('nomApell', nomApell);
      localStorage.setItem('photoUser', payload.picture);
    }
    this.setAuthWith(authWith);
    this.isAuthSubject.next(true);
  }

  removeLocalStorage(parte: boolean) {
    if (parte) {
      localStorage.removeItem('email');
      localStorage.removeItem('dataUserComplete');
    }
    localStorage.removeItem('nombres');
    localStorage.removeItem('apellidos');
    localStorage.removeItem('idUsuario');
    localStorage.removeItem('idTokenGoogle');
    localStorage.removeItem('urlPrevious');
    localStorage.removeItem('urlPrevious-abort');
  }

  logout() {
    localStorage.clear();
    this.isAuthSubject.next(false);
  }

  recoveryPassword(email: string) {
    return this.httpsService.post(
      environment.andresApiRestBaseUrl + '/usuario/recover/password',
      { email: email }
    );
  }

  resetPassword(body: { newPassword: string; token: string }) {
    return this.httpsService.put(
      environment.andresApiRestBaseUrl + '/usuario/update/password',
      body
    );
  }

  changePassword(body: { antiguoPassword: string; newPassword: string }) {
    return this.httpsService.put(
      environment.andresApiRestBaseUrl + '/usuario/change/password',
      body
    );
  }

  isAuthenticated() {
    let email = localStorage.getItem('email');
    let token = localStorage.getItem('token');
    if (email && token && email != '' && token != '') {
      return true;
    } else {
      return false;
    }
  }

  authenticatedWith() {
    let authWith = localStorage.getItem('authWith');
    return authWith;
  }

  setAuthUserPhoto(photoUrl: string) {
    localStorage.setItem('photoUser', photoUrl);
  }

  setAuthUserNomApell(nomApell: string) {
    localStorage.setItem('nomApell', nomApell);
  }

  getAuthUserNomApell() {
    return localStorage.getItem('nomApell');
  }

  getAuthUserPhoto() {
    return localStorage.getItem('photoUser');
  }
  getAuthUserTipo_usuario() {
    return localStorage.getItem('tipoUser');
  }

  setAuthWith(method: string) {
    localStorage.setItem('authWith', method);
  }

  verifyAccount(token: string) {
    return this.httpsService.put(
      environment.andresApiRestBaseUrl + '/usuario/verify/account',
      { token: token }
    );
  }

  getAuthUser() {
    let token = localStorage.getItem('token');
    let payload = null;
    if (token) {
      payload = Utilities.parseJwt(token!);
    }
    return payload;
  }

  getAuthUserId() {
    return this.getAuthUser()?.sub;
  }
  getAuthUserRol() {
    return this.getAuthUser()?.rol;
  }

  getAuthUserToken() {
    let token = localStorage.getItem('token');
    return token;
  }

  getAuthObservable() {
    return this.isAuthSubject.asObservable();
  } */
}

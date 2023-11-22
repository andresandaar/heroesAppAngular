import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Suscribirse al observable del servicio para actualizar el token local
    /* this.authService.token$.subscribe((token) => {
      if (token) {
        localStorage.setItem('token', token);
      }
    }); */
  }
}

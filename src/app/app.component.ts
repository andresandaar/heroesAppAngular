import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public sidebarItems = [
    {
      label: 'Listado',
      icon: 'label',
      url: './list',
    },
    {
      label: 'Añadir',
      icon: 'add',
      url: './new-hero',
    },
    {
      label: 'Buscar',
      icon: 'search',
      url: './search',
    },
  ];
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

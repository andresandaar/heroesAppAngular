
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@auth_models/user.interface';
import { AuthService } from '@auth_services/auth.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
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

  constructor(public authServices: AuthService, private router: Router) {}

  get user(): User | undefined {
    return this.authServices.currentUser;
  }

  onLogout() {
    this.authServices.logout();
    this.router.navigate(['/auth']);
  }
}

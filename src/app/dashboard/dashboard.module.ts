import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomePageComponent } from './pages/home/home-page.component';
import { HeroesModule } from '../heroes/heroes.module';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    HeroesModule,
    UsuariosModule,
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule ,
    MatSidenavModule
  ]
})
export class DashboardModule { }

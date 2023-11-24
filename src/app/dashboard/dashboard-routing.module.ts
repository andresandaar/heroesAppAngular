import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from '../heroes/pages/layout-page/layout-page.component';
import { NewPageComponent } from '../heroes/pages/new-page/new-page.component';
import { SearchPageComponent } from '../heroes/pages/search-page/search-page.component';
import { ListPageComponent } from '../heroes/pages/list-page/list-page.component';
import { HeroPageComponent } from '../heroes/pages/hero-page/hero-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { UsuarioPageComponent } from '../usuarios/pages/usuario-page/usuario-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },

  {
    path: 'user',
    component: HomePageComponent,
    children: [
      {
        path: 'infor',
        component: UsuarioPageComponent,
      },
      {
        path: '**',
        redirectTo: 'infor',
      },
    ],
  },

  {
    path: 'heroes',
    component: HomePageComponent,
    children: [
      {
        path: 'new-hero',
        component: NewPageComponent,
      },
      {
        path: 'search',
        component: SearchPageComponent,
      },
      {
        path: 'edit/:id',
        component: NewPageComponent,
      },
      {
        path: 'list',
        component: ListPageComponent,
      },
      {
        path: ':id',
        component: HeroPageComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'user',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

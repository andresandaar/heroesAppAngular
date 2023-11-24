import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page/error404-page.component';
import { authGuardCanActivate, authGuardCanMatch } from './auth/guards/auth.guard';
import { publicGuardCanActivate, publicGuardCanMatch } from './auth/guards/public.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [publicGuardCanActivate],
    canMatch: [publicGuardCanMatch],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [authGuardCanActivate],
    canMatch: [authGuardCanMatch],
  },
  {
    path: '404',
    component: Error404PageComponent,
  },

    {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

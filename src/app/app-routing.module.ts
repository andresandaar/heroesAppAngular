import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './core/shared/pages/error404-page/error404-page/error404-page.component';
import { authGuardCanActivate, authGuardCanMatch } from './core/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
  },

  {
    path: 'intranet',
    loadChildren: () =>
      import('./intranet/intranet.module').then((m) => m.IntranetModule),
    canActivate: [authGuardCanActivate],
    canMatch: [authGuardCanMatch],
  },

  {
    path: '404',
    component: Error404PageComponent,
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },

  { path: '**', component: Error404PageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuardCanActivate, authGuardCanMatch } from '@core_guards/auth.guard';
import { Error404PageComponent } from '@core_shared/pages/error404-page/error404-page.component';


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

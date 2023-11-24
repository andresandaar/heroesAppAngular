import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntranetComponent } from './intranet.component';

const routes: Routes = [
  {
    path: '',
    component: IntranetComponent,
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'heroes',
        loadChildren: () =>
          import('./heroes/heroes.module').then((m) => m.HeroesModule),
      },
   /*    {
        path: '**',
        redirectTo: 'users',
      }, */
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }

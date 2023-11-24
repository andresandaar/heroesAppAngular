import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { UsersComponent } from './users.component';


@NgModule({
  declarations: [
    ProfilePageComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }

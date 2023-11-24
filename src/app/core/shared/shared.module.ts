import { NgModule } from '@angular/core';
import { Error404PageComponent } from './pages/error404-page/error404-page/error404-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';




@NgModule({
  declarations: [Error404PageComponent, NavBarComponent],
  exports: [Error404PageComponent, NavBarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
  ],
})
export class SharedModule {}

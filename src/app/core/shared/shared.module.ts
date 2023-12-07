import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MaterialModule } from 'src/app/material/material.module';




@NgModule({
  declarations: [Error404PageComponent, NavBarComponent, SidebarComponent],
  exports: [Error404PageComponent, NavBarComponent, SidebarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatExpansionModule,
    MaterialModule,
    RouterModule,
  ],
})
export class SharedModule {}

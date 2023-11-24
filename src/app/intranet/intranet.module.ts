import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntranetRoutingModule } from './intranet-routing.module';
import { IntranetComponent } from './intranet.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from '../core/shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [IntranetComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MaterialModule,
    RouterModule,
    SharedModule,
    IntranetRoutingModule,
  ],
})
export class IntranetModule {}

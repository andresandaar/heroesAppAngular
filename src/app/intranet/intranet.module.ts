import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MaterialModule } from '../material/material.module';
import { IntranetRoutingModule } from './intranet-routing.module';
import { IntranetComponent } from './intranet.component';
import { SharedModule } from '@core_shared/shared.module';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [IntranetComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    MaterialModule,
    RouterModule,
    SharedModule,
    IntranetRoutingModule,
  ],
})
export class IntranetModule {}

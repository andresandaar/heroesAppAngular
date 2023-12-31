import { Component } from '@angular/core';

@Component({
  selector: 'app-intranet',
  templateUrl: './intranet.component.html',
  styleUrls: ['./intranet.component.scss'],
})
export class IntranetComponent {
  onSidenav: boolean = false;
  toogle() {
    this.onSidenav = !this.onSidenav;
  }
}

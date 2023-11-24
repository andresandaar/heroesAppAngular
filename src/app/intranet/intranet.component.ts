import { Component } from '@angular/core';

@Component({
  selector: 'app-intranet',
  templateUrl: './intranet.component.html',
  styleUrls: ['./intranet.component.scss'],
})
export class IntranetComponent {
  public sidebarItems = [
    {
      label: 'Listado',
      icon: 'label',
      url: '/heroes/list',
    },
    {
      label: 'Añadir',
      icon: 'add',
      url: '/heroes/new-hero',
    },
    {
      label: 'Buscar',
      icon: 'search',
      url: 'intranet/heroes/search',
    },
  ];
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Output() OnMatlistItem: EventEmitter<boolean> = new EventEmitter<boolean>();

  panelPrinc: boolean = false;

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
  panelOpenState = false;
  panels = [
    {
      title: 'Panel 1',
      content: 'Contenido del Panel 1',
      children: [
        { title: 'Panel 1.1', content: 'Contenido del Panel 1.1' },
        { title: 'Panel 1.2', content: 'Contenido del Panel 1.2' },
      ],
    },
    {
      title: 'Panel 2',
      content: 'Contenido del Panel 2',
      children: [
        { title: 'Panel 2.1', content: 'Contenido del Panel 2.1' },
        { title: 'Panel 2.2', content: 'Contenido del Panel 2.2' },
      ],
    },
    // Puedes agregar más paneles y niveles según sea necesario
  ];
  step = 0;

  panelOpenPrinc() {
    this.panelPrinc = true;
  }
  panelClosePrinc() {
    this.panelPrinc = false;
  }

  matlistItem() {
    this.OnMatlistItem.emit(true);
  }
}

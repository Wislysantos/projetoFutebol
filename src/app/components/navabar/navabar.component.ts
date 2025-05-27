import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { ViewportScroller } from '@angular/common';

import { ImageModule } from 'primeng/image';
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navabar',
  imports: [ToolbarModule, ButtonModule, ImageModule, Menu],
  templateUrl: './navabar.component.html',
  styleUrl: './navabar.component.css'
})
export class NavabarComponent implements OnInit {

  constructor(private scroller: ViewportScroller) {}
 
  scrollToAnchor(anchor: string) {
    this.scroller.scrollToAnchor(anchor);
  }

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Regulamento',
        icon: 'pi pi-fw pi-home',
        url: 'https://drive.google.com/file/d/17uE_lEPysZJyJQU7xD2YzcaktzficNaP/view'
      },
      {
        label: 'Tabela',
        icon: 'pi pi-fw pi-users',
        command: () => this.scrollToAnchor('tabela')
      },
      {
        label: 'Jogos',
        icon: 'pi pi-fw pi-user',
        command: () => this.scrollToAnchor('jogos')
      },
      {
        label: 'Artilharia',
        icon: 'pi pi-fw pi-calendar',
        command: () => this.scrollToAnchor('artilheiro')
      },
      {
        label: 'Fotos',
        icon: 'pi pi-camera',
        disabled: true,
        url: ''        
      }
    ];
  }

}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { Tag } from 'primeng/tag';

import { StepperModule } from 'primeng/stepper';


import { CampeonatoService } from '../../services/campeonato.service';

@Component({
  standalone: true,
  selector: 'app-craquejogo',
  imports: [TableModule, DataViewModule, PaginatorModule, Tag, ButtonModule, CommonModule, StepperModule],
  templateUrl: './craquejogo.component.html',
  styleUrl: './craquejogo.component.css'
})
export class CraquejogoComponent implements OnInit {

  constructor(private craques: CampeonatoService){

  }
  craquesJogos1: any[] = [];
  craquesJogos2: any[] = [];
  craquesJogos3: any[] = [];
  craquesJogos4: any[] = [];
  craquesJogos5: any[] = [];

  ngOnInit() {
    this.craquesJogos1 = this.craques.CraqueRodada1;
    this.craquesJogos2 = this.craques.CraqueRodada2;
    this.craquesJogos3 = this.craques.CraqueRodada3;
    this.craquesJogos4 = this.craques.CraqueRodada4;
    this.craquesJogos5 = this.craques.CraqueRodada5;
    
  }

}

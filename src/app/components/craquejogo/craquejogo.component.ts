import { Component, OnInit } from '@angular/core';
import { table } from 'console';

import { TableModule } from 'primeng/table';
import { CampeonatoService } from '../../services/campeonato.service';

@Component({
  selector: 'app-craquejogo',
  imports: [TableModule],
  templateUrl: './craquejogo.component.html',
  styleUrl: './craquejogo.component.css'
})
export class CraquejogoComponent implements OnInit {

  constructor(private craques: CampeonatoService){

  }

  craquesJogos: any[] = [];

  ngOnInit() {
    this.craquesJogos = this.craques.CraqueRodada1;
  }

}

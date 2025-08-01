import { Component, OnInit } from '@angular/core';

import { TableModule } from 'primeng/table';
import { StepperModule } from 'primeng/stepper';

import { CampeonatoService } from '../../services/campeonato.service';

@Component({
  selector: 'app-jogos-quartas',
  imports: [StepperModule, TableModule],
  templateUrl: './jogos-quartas.component.html',
  styleUrl: './jogos-quartas.component.css'
})
export class JogosQuartasComponent implements OnInit{

  quartas: any = [];
  semiFinal: any = [];
  final: any = [];
  tvConsoni: any = []
  isDesktop = false; 

  constructor(private campeonatoService : CampeonatoService ){   
  }

  ngOnInit(): void {
    this.tvConsoni = this.campeonatoService.tvConsoni;
     this.quartas = this.campeonatoService.quartas;
    this.semiFinal = this.campeonatoService.semifinal;
    this.final = this.campeonatoService.final;
        const isDesktop = window.matchMedia('(min-width: 769px)').matches;
    this.isDesktop = isDesktop; 
  }

}

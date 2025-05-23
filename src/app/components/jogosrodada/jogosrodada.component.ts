import { Component, OnInit } from '@angular/core';

import { TableModule } from 'primeng/table';
import { StepperModule } from 'primeng/stepper';

import { CampeonatoService } from '../../services/campeonato.service';

@Component({
  selector: 'app-jogosrodada',
  imports: [TableModule, StepperModule],
  templateUrl: './jogosrodada.component.html',
  styleUrl: './jogosrodada.component.css'
})
export class JogosrodadaComponent implements OnInit {

  constructor(private campeonatoService : CampeonatoService) {}
  rodadas1: any[] = [];
  rodadas2: any[] = []; 
  rodadas3: any[] = [];
  rodadas4: any[] = [];
  rodadas5: any[] = [];

  isDesktop = false; 
  ngOnInit(): void {
    this.rodadas1 = this.campeonatoService.rodadas1;
    this.rodadas2 = this.campeonatoService.rodadas2;
    this.rodadas3 = this.campeonatoService.rodadas3;
    this.rodadas4 = this.campeonatoService.rodadas4;
    this.rodadas5 = this.campeonatoService.rodadas5;
    const isDesktop = window.matchMedia('(min-width: 769px)').matches;
    this.isDesktop = isDesktop;    
  }

}

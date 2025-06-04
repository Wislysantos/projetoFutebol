import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { table } from 'console';

import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';
import { CampeonatoService } from '../../services/campeonato.service';

@Component({
  selector: 'app-tabelagrupo',
  imports: [SplitterModule, TableModule],
  templateUrl: './tabelagrupo.component.html',
  styleUrl: './tabelagrupo.component.css'
})
export class TabelagrupoComponent implements OnInit {

  isMobile = false;
  isDesktop = false;
  

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private campeonatoService: CampeonatoService) {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
    }    
  }

  timesGrupoA: any[] = [];
  timesGrupoB: any[] = [];

  ngOnInit(): void {
    this.timesGrupoA = this.campeonatoService.timesGrupoAM;
    this.timesGrupoB = this.campeonatoService.timesGrupoBM;
    //this.timesClasssificacaodoGrupoA = this.calcularClassificacao(this.timesGrupoA);
    //this.timesClasssificacaodoGrupoB = this.calcularClassificacao(this.timesGrupoB);
    this.timesClasssificacaodoGrupoA = this.timesGrupoA;
    this.timesClasssificacaodoGrupoB = this.timesGrupoB;    
    const isDesktop = window.matchMedia('(min-width: 769px)').matches;
    this.isDesktop = isDesktop;
    //console.log('isDesktop:', isDesktop);
  }


  timesClasssificacaodoGrupoA: any[] = [];
  timesClasssificacaodoGrupoB: any[] = [];

  calcularClassificacao(times: any[]) {
  // Ordena por pontos, depois por vitórias, depois por saldo de gols (se você quiser no futuro)
    const classificados = [...times].sort((a, b) => {
      if (b.pontos !== a.pontos) return b.pontos - a.pontos;
      if (b.vitorias !== a.vitorias) return b.vitorias - a.vitorias;
      if(b.cv !== a.cv) return b.cv + a.cv;
      if(b.ca !== a.ca) return b.ca + a.ca;
      if(b.sg !== a.sg) return b.sg - a.sg;
      if(b.gm !== a.gm) return b.gm - a.gm;
      if(b.gs !== a.gs) return b.gs - a.gs;
      return 0;
    });
    return classificados;
  }

}

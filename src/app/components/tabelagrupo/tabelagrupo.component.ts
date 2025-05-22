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

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private campeonatoService: CampeonatoService) {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
    }    
  }

  timesGrupoA: any[] = [];
  timesGrupoB: any[] = [];

  ngOnInit(): void {
    this.timesGrupoA = this.campeonatoService.timesGrupoA;
    this.timesGrupoB = this.campeonatoService.timesGrupoB;
    this.timesClasssificacaodoGrupoA = this.calcularClassificacao(this.timesGrupoA);
    this.timesClasssificacaodoGrupoB = this.calcularClassificacao(this.timesGrupoB);
  }


  timesClasssificacaodoGrupoA: any[] = [];
  timesClasssificacaodoGrupoB: any[] = [];

  calcularClassificacao(times: any[]) {
  // Ordena por pontos, depois por vitórias, depois por saldo de gols (se você quiser no futuro)
    const classificados = [...times].sort((a, b) => {
      if (b.pontos !== a.pontos) return b.pontos - a.pontos;
      if (b.vitorias !== a.vitorias) return b.vitorias - a.vitorias;
      return 0; // Se quiser considerar saldo de gols, adicione aqui
    });
    return classificados;
  }

}

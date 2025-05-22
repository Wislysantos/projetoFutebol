import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { table } from 'console';

import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-tabelagrupo',
  imports: [SplitterModule, TableModule],
  templateUrl: './tabelagrupo.component.html',
  styleUrl: './tabelagrupo.component.css'
})
export class TabelagrupoComponent {

  isMobile = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, ) {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
    }    
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

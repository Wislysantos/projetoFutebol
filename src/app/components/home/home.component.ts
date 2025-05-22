import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { NavabarComponent } from '../navabar/navabar.component';
import { BemvindoComponent } from '../bemvindo/bemvindo.component';
import { PatrocinoComponent } from '../patrocino/patrocino.component';
import { TabelagrupoComponent } from '../tabelagrupo/tabelagrupo.component';
import { JogosrodadaComponent } from "../jogosrodada/jogosrodada.component";





@Component({
  selector: 'app-home',
  imports: [
    NavabarComponent,
    BemvindoComponent,
    PatrocinoComponent,
    TabelagrupoComponent,
    JogosrodadaComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  

  /*ngOnInit() {
    this.timesClasssificacaodoGrupoA = this.calcularClassificacao(this.timesGrupoA);
    this.timesClasssificacaodoGrupoB = this.calcularClassificacao(this.timesGrupoB);
    console.log(this.rodadas1);
    console.log(this.rodadas1[0].time1[0].nome);
  }*/


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

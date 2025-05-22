import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { NavabarComponent } from '../navabar/navabar.component';
import { BemvindoComponent } from '../bemvindo/bemvindo.component';
import { PatrocinoComponent } from '../patrocino/patrocino.component';
import { TabelagrupoComponent } from '../tabelagrupo/tabelagrupo.component';
import { JogosrodadaComponent } from "../jogosrodada/jogosrodada.component";

import { ToolbarModule } from 'primeng/toolbar';
import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';



@Component({
  selector: 'app-home',
  imports: [
    ToolbarModule,
    SplitterModule,
    TableModule,
    ButtonModule,
    StepperModule,
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

  isMobile = false;
  timesClasssificacaodoGrupoA: any[] = [];
  timesClasssificacaodoGrupoB: any[] = [];
  
  timesGrupoA =
  [
    { nome: 'Crystal Palace', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, img:'' },
    { nome: 'Lions', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, img:''  },
    { nome: 'Bela Vista', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, img:''  },
    { nome: 'Ressaca', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, img:''  },
    { nome: 'Fúria', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, img:'' },
  ];

  timesGrupoB =
  [
    { nome: 'Taquaral', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, img:''  },
    { nome: 'Real Black', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, img:''  },
    { nome: 'Nova Geração', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, img:''  },
    { nome: 'Galáticos', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, img:''  },
    { nome: 'Gama', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, img:'' }
  ];

  timeCrystalPalace = [{nome: this.timesGrupoA[0].nome, img: this.timesGrupoA[0].img}];
  timeLions = [{nome: this.timesGrupoA[1].nome, img: this.timesGrupoA[1].img}];
  timeBelaVista = [{nome: this.timesGrupoA[2].nome, img: this.timesGrupoA[2].img}];
  timeRessaca = [{nome: this.timesGrupoA[3].nome, img: this.timesGrupoA[3].img}];
  timeFuria = [{nome: this.timesGrupoA[4].nome, img: this.timesGrupoA[4].img}];

  timeTaquaral = [{nome: this.timesGrupoB[0].nome, img: this.timesGrupoB[0].img}];
  timeRealBlack = [{nome: this.timesGrupoB[1].nome, img: this.timesGrupoB[1].img}];
  timeNovaGeracao = [{nome: this.timesGrupoB[2].nome, img: this.timesGrupoB[2].img}];
  timeGalaticos = [{nome: this.timesGrupoB[3].nome, img: this.timesGrupoB[3].img}];
  timeGama = [{nome: this.timesGrupoB[4].nome, img: this.timesGrupoB[4].img}];

  rodadas1 = [
    { dataHora: "26/05 19:50",time1: this.timeCrystalPalace, time2: this.timeTaquaral },
    { dataHora: "26/05 20:50",time1: this.timeRealBlack, time2: this.timeLions },
    { dataHora: "26/05 08:30",time1: this.timeFuria, time2: this.timeNovaGeracao },
    { dataHora: "26/05 09:30",time1: this.timeGalaticos, time2: this.timeBelaVista },
    { dataHora: "26/05 10:30",time1: this.timeRessaca, time2: this.timeGama }
  ]

    rodadas2 = [
    { dataHora: "08/06 19:50",time1: this.timeCrystalPalace, time2: this.timeRealBlack },
    { dataHora: "08/06 20:50",time1: this.timeTaquaral, time2: this.timeFuria },
    { dataHora: "08/06 08:30",time1: this.timeLions, time2: this.timeGalaticos },
    { dataHora: "15/06 09:30",time1: this.timeGama, time2: this.timeBelaVista },
    { dataHora: "15/06 10:30",time1: this.timeNovaGeracao, time2: this.timeRessaca }
  ]

    rodadas3 = [
    { dataHora: "15/06 10:30",time1: this.timeFuria, time2: this.timeRealBlack },
    { dataHora: "22/06 08:30",time1: this.timeRessaca, time2: this.timeTaquaral },
    { dataHora: "22/06 09:30",time1: this.timeCrystalPalace, time2: this.timeGalaticos },
    { dataHora: "22/06 10:30",time1: this.timeNovaGeracao, time2: this.timeBelaVista },
    { dataHora: "29/06 08:30",time1: this.timeLions, time2: this.timeGama }
  ]

    rodadas4 = [
    { dataHora: "29/06 19:50",time1: this.timeBelaVista, time2: this.timeTaquaral },
    { dataHora: "29/06 20:50",time1: this.timeFuria, time2: this.timeGalaticos },
    { dataHora: "06/07 08:30",time1: this.timeLions, time2: this.timeNovaGeracao },
    { dataHora: "06/07 09:30",time1: this.timeGama, time2: this.timeCrystalPalace },
    { dataHora: "06/07 10:30",time1: this.timeRealBlack, time2: this.timeRessaca }
  ]

    rodadas5 = [
    { dataHora: "13/07 08:30",time1: this.timeGalaticos, time2: this.timeRessaca },
    { dataHora: "13/07 09:30",time1: this.timeTaquaral, time2: this.timeLions },
    { dataHora: "13/07 10:30",time1: this.timeCrystalPalace, time2: this.timeNovaGeracao },
    { dataHora: "20/07 09:00",time1: this.timeGama, time2: this.timeFuria },
    { dataHora: "20/07 10:00",time1: this.timeRealBlack, time2: this.timeBelaVista }
  ]


  ngOnInit() {
    this.timesClasssificacaodoGrupoA = this.calcularClassificacao(this.timesGrupoA);
    this.timesClasssificacaodoGrupoB = this.calcularClassificacao(this.timesGrupoB);
    console.log(this.rodadas1);
    console.log(this.rodadas1[0].time1[0].nome);
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object, ) {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
    }    
  }

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

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {
  
  public timesGrupoA =
  [
    { nome: 'Crystal Palace', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, img:'https://dc614.4shared.com/img/KA-gtIndjq/s24/196fa1e2de0/crystalpalace?async&rand=0.6378614181489618' },
    { nome: 'Lions', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, img:'https://dc614.4shared.com/img/_572RHj5jq/s24/196fa1e3998/lions?async&rand=0.9687469723239873'  },
    { nome: 'Bela Vista', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, img:'https://dc614.4shared.com/img/xQ15hqkGjq/s24/196fa1e3d80/real?async&rand=0.03774409152271674'  },
    { nome: 'Ressaca', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, img:'https://dc435.4shared.com/img/qwbVbNNojq/s24/196fa1e4168/ressaca?async&rand=0.2635700656144826'  },
    { nome: 'Fúria', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, img:'https://dc614.4shared.com/img/piyFVOdQge/s24/196fa1e31c8/furia?async&rand=0.08308824956568084' },
  ];

  public timesGrupoB =
  [
    { nome: 'Taquaral', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, img:'https://dc435.4shared.com/img/9bGNSUvjfa/s24/196fa1e4168/taquaral?async&rand=0.9592027751940819'  },
    { nome: 'Real Black', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, img:'https://dc435.4shared.com/img/R3fij0TGfa/s24/196fa1e3d80/realblack?async&rand=0.10655096825397614'  },
    { nome: 'Nova Geração', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, img:'https://dc704.4shared.com/img/mXsr39p8ge/s24/196fac8b238/novageracao_white?async&rand=0.8221292739981957'  },
    { nome: 'Galáticos', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, img:'https://dc614.4shared.com/img/R8RKS9u5fa/s24/196fa1e35b0/galaticos?async&rand=0.80551980335989'  },
    { nome: 'Gama', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, img:'https://dc614.4shared.com/img/pR0l3ZoCjq/s24/196fa1e35b0/gama?async&rand=0.9381753409789247' }
  ];

  public timeCrystalPalace = [{nome: this.timesGrupoA[0].nome, img: this.timesGrupoA[0].img}];
  public timeLions = [{nome: this.timesGrupoA[1].nome, img: this.timesGrupoA[1].img}];
  public timeBelaVista = [{nome: this.timesGrupoA[2].nome, img: this.timesGrupoA[2].img}];
  public timeRessaca = [{nome: this.timesGrupoA[3].nome, img: this.timesGrupoA[3].img}];
  public timeFuria = [{nome: this.timesGrupoA[4].nome, img: this.timesGrupoA[4].img}];

  public timeTaquaral = [{nome: this.timesGrupoB[0].nome, img: this.timesGrupoB[0].img}];
  public timeRealBlack = [{nome: this.timesGrupoB[1].nome, img: this.timesGrupoB[1].img}];
  public timeNovaGeracao = [{nome: this.timesGrupoB[2].nome, img: this.timesGrupoB[2].img}];
  public timeGalaticos = [{nome: this.timesGrupoB[3].nome, img: this.timesGrupoB[3].img}];
  public timeGama = [{nome: this.timesGrupoB[4].nome, img: this.timesGrupoB[4].img}];

  public rodadas1 = [
    { dataHora: "26/05 19:50",time1: this.timeCrystalPalace, placarTime1:0 , time2: this.timeTaquaral, placarTime2: 0 },
    { dataHora: "26/05 20:50",time1: this.timeRealBlack, placarTime1: 0, time2: this.timeLions, placarTime2: 0 },
    { dataHora: "01/06 08:30",time1: this.timeFuria, placarTime1: 0, time2: this.timeNovaGeracao, placarTime2: 0 },
    { dataHora: "01/06 09:30",time1: this.timeGalaticos, placarTime1: 0, time2: this.timeBelaVista, placarTime2: 0 },
    { dataHora: "01/06 10:30",time1: this.timeRessaca, placarTime1: 0, time2: this.timeGama, placarTime2: 0 }
  ]

  public rodadas2 = [
    { dataHora: "08/06 19:50",time1: this.timeCrystalPalace, placarTime1: 0, time2: this.timeRealBlack, placarTime2: 0 },
    { dataHora: "08/06 20:50",time1: this.timeTaquaral, placarTime1: 0, time2: this.timeFuria, placarTime2: 0 },
    { dataHora: "08/06 08:30",time1: this.timeLions, placarTime1: 0, time2: this.timeGalaticos, placarTime2: 0 },
    { dataHora: "15/06 09:30",time1: this.timeGama, placarTime1: 0, time2: this.timeBelaVista, placarTime2: 0 },
    { dataHora: "15/06 10:30",time1: this.timeNovaGeracao, placarTime1: 0, time2: this.timeRessaca, placarTime2: 0 }
  ]

  public rodadas3 = [
    { dataHora: "15/06 10:30",time1: this.timeFuria, placarTime1: 0, time2: this.timeRealBlack, placarTime2: 0 },
    { dataHora: "22/06 08:30",time1: this.timeRessaca, placarTime1: 0, time2: this.timeTaquaral, placarTime2: 0 },
    { dataHora: "22/06 09:30",time1: this.timeCrystalPalace, placarTime1: 0, time2: this.timeGalaticos, placarTime2: 0 },
    { dataHora: "22/06 10:30",time1: this.timeNovaGeracao, placarTime1: 0, time2: this.timeBelaVista, placarTime2: 0 },
    { dataHora: "29/06 08:30",time1: this.timeLions, placarTime1: 0, time2: this.timeGama, placarTime2: 0 }
  ]

  public rodadas4 = [
    { dataHora: "29/06 19:50",time1: this.timeBelaVista, placarTime1: 0, time2: this.timeTaquaral, placarTime2: 0 },
    { dataHora: "29/06 20:50",time1: this.timeFuria, placarTime1: 0, time2: this.timeGalaticos, placarTime2: 0 },
    { dataHora: "06/07 08:30",time1: this.timeLions, placarTime1: 0, time2: this.timeNovaGeracao, placarTime2: 0 },
    { dataHora: "06/07 09:30",time1: this.timeGama, placarTime1: 0, time2: this.timeCrystalPalace, placarTime2: 0 },
    { dataHora: "06/07 10:30",time1: this.timeRealBlack, placarTime1: 0, time2: this.timeRessaca, placarTime2: 0 }
  ]

  public rodadas5 = [
    { dataHora: "13/07 08:30",time1: this.timeGalaticos, placarTime1: 0, time2: this.timeRessaca, placarTime2: 0 },
    { dataHora: "13/07 09:30",time1: this.timeTaquaral, placarTime1: 0, time2: this.timeLions, placarTime2: 0 },
    { dataHora: "13/07 10:30",time1: this.timeCrystalPalace, placarTime1: 0, time2: this.timeNovaGeracao, placarTime2: 0 },
    { dataHora: "20/07 09:00",time1: this.timeGama, placarTime1: 0, time2: this.timeFuria, placarTime2: 0 },
    { dataHora: "20/07 10:00",time1: this.timeRealBlack, placarTime1: 0, time2: this.timeBelaVista, placarTime2: 0 }
  ]

  constructor() { }
  
}

import { Injectable } from '@angular/core';
import { time } from 'console';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {  
  
  public timesGrupoA =
  [
    { nome: 'Crystal Palace', pontos: 0, jogos: 1, vitorias: 0, empates: 0, derrotas: 1, gm: 1, gs: 10, sg: -9, cv: 0, ca:1 , img:'https://dc614.4shared.com/img/KA-gtIndjq/s24/196fa1e2de0/crystalpalace?async&rand=0.6378614181489618' },
    { nome: 'Lions', pontos: 1, jogos: 1, vitorias: 0, empates: 1, derrotas: 0, gm: 3, gs: 3, sg: 0,cv:0 , ca:1 , img:'https://dc614.4shared.com/img/_572RHj5jq/s24/196fa1e3998/lions?async&rand=0.9687469723239873'  },
    { nome: 'Bela Vista', pontos: 3, jogos: 1, vitorias: 1, empates: 0, derrotas: 0, gm: 10, gs: 6,  sg: 4,cv: 0, ca:1 , img:'https://dc614.4shared.com/img/xQ15hqkGjq/s24/196fa1e3d80/real?async&rand=0.03774409152271674'  },
    { nome: 'Ressaca', pontos: 3, jogos: 1, vitorias: 1, empates: 0, derrotas: 0, gm: 7, gs: 6,  sg: 1,cv:0 , ca: 1, img:'https://dc435.4shared.com/img/qwbVbNNojq/s24/196fa1e4168/ressaca?async&rand=0.2635700656144826'  },
    { nome: 'Fúria', pontos: 0, jogos: 1, vitorias: 0, empates: 0, derrotas: 1, gm: 2, gs: 8,  sg: -6,cv:0 , ca:0 , img:'https://dc614.4shared.com/img/piyFVOdQge/s24/196fa1e31c8/furia?async&rand=0.08308824956568084' },
  ];

  public timesGrupoB =
  [
    { nome: 'Taquaral', pontos: 3, jogos: 1, vitorias: 1, empates: 0, derrotas: 0, gm: 10, gs: 1,  sg: 9,cv: 0, ca: 1, img:'https://dc435.4shared.com/img/9bGNSUvjfa/s24/196fa1e4168/taquaral?async&rand=0.9592027751940819'  },
    { nome: 'Real Black', pontos: 1, jogos: 1, vitorias: 0, empates: 1, derrotas: 0, gm: 3, gs: 3,  sg: 0,cv: 0, ca: 0, img:'https://dc435.4shared.com/img/R3fij0TGfa/s24/196fa1e3d80/realblack?async&rand=0.10655096825397614'  },
    { nome: 'Nova Geração', pontos: 3, jogos: 1, vitorias: 1, empates: 0, derrotas: 0, gm: 8, gs: 2,  sg: 6,cv: 0, ca: 1, img:'https://dc704.4shared.com/img/Jzedcu2Efa/s24/1970c8e39e8/novageracao_white_fundoPreto?async&rand=0.672181432893189'  },
    { nome: 'Galáticos', pontos: 0, jogos: 1, vitorias: 0, empates: 0, derrotas: 1, gm: 6, gs: 10,  sg: -4,cv: 0, ca: 1, img:'https://dc614.4shared.com/img/R8RKS9u5fa/s24/196fa1e35b0/galaticos?async&rand=0.80551980335989'  },
    { nome: 'Gama', pontos: 0, jogos: 1, vitorias: 0, empates: 0, derrotas: 1, gm: 6, gs: 7,  sg: -1,cv: 1, ca: 3, img:'https://dc614.4shared.com/img/pR0l3ZoCjq/s24/196fa1e35b0/gama?async&rand=0.9381753409789247' }
  ];

  public timesGrupoAM =
  [
    { nome: 'Ressaca', pontos: 3, jogos: 1, vitorias: 1, empates: 0, derrotas: 0, gm: 7, gs: 6,  sg: 1,cv:0 , ca: 0, img:'https://dc435.4shared.com/img/qwbVbNNojq/s24/196fa1e4168/ressaca?async&rand=0.2635700656144826'  },
    { nome: 'Bela Vista', pontos: 3, jogos: 1, vitorias: 1, empates: 0, derrotas: 0, gm: 10, gs: 6,  sg: 4,cv: 0, ca:1 , img:'https://dc614.4shared.com/img/xQ15hqkGjq/s24/196fa1e3d80/real?async&rand=0.03774409152271674'  },
    { nome: 'Crystal Palace', pontos: 3, jogos: 2, vitorias: 1, empates: 0, derrotas: 1, gm: 4, gs: 9, sg: -5, cv: 0, ca:1 , img:'https://dc614.4shared.com/img/KA-gtIndjq/s24/196fa1e2de0/crystalpalace?async&rand=0.6378614181489618' },
    { nome: 'Lions', pontos: 1, jogos: 2, vitorias: 0, empates: 1, derrotas: 1, gm: 5, gs: 13, sg: -8,cv:0 , ca:1 , img:'https://dc614.4shared.com/img/_572RHj5jq/s24/196fa1e3998/lions?async&rand=0.9687469723239873'  },
    { nome: 'Fúria', pontos: 0, jogos: 2, vitorias: 0, empates: 0, derrotas: 2, gm: 3, gs: 29,  sg: -26,cv:0 , ca:0 , img:'https://dc614.4shared.com/img/piyFVOdQge/s24/196fa1e31c8/furia?async&rand=0.08308824956568084' },
  ];

  public timesGrupoBM =
  [
    { nome: 'Taquaral', pontos: 6, jogos: 2, vitorias: 2, empates: 0, derrotas: 0, gm: 30, gs: 2,  sg: 28,cv: 0, ca: 1, img:'https://dc435.4shared.com/img/9bGNSUvjfa/s24/196fa1e4168/taquaral?async&rand=0.9592027751940819'  },
    { nome: 'Nova Geração', pontos: 3, jogos: 1, vitorias: 1, empates: 0, derrotas: 0, gm: 8, gs: 2,  sg: 6,cv: 0, ca: 1, img:'https://dc704.4shared.com/img/Jzedcu2Efa/s24/1970c8e39e8/novageracao_white_fundoPreto?async&rand=0.672181432893189'  },
    { nome: 'Galáticos', pontos: 3, jogos: 2, vitorias: 1, empates: 0, derrotas: 1, gm: 16, gs: 12,  sg: 4,cv: 0, ca: 1, img:'https://dc614.4shared.com/img/R8RKS9u5fa/s24/196fa1e35b0/galaticos?async&rand=0.80551980335989'  },
    { nome: 'Real Black', pontos: 1, jogos: 2, vitorias: 0, empates: 1, derrotas: 1, gm: 3, gs: 6,  sg: -3,cv: 0, ca: 4, img:'https://dc435.4shared.com/img/R3fij0TGfa/s24/196fa1e3d80/realblack?async&rand=0.10655096825397614'  },
    { nome: 'Gama', pontos: 0, jogos: 1, vitorias: 0, empates: 0, derrotas: 1, gm: 6, gs: 7,  sg: -1,cv: 1, ca: 3, img:'https://dc614.4shared.com/img/pR0l3ZoCjq/s24/196fa1e35b0/gama?async&rand=0.9381753409789247' }
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
    { dataHora: "26/05 19:50",time1: this.timeCrystalPalace, placarTime1:1 , time2: this.timeTaquaral, placarTime2: 9 },
    { dataHora: "26/05 20:50",time1: this.timeRealBlack, placarTime1: 3, time2: this.timeLions, placarTime2: 3 },
    { dataHora: "01/06 08:30",time1: this.timeFuria, placarTime1: 2, time2: this.timeNovaGeracao, placarTime2: 8 },
    { dataHora: "01/06 09:30",time1: this.timeGalaticos, placarTime1: 6, time2: this.timeBelaVista, placarTime2: 10 },
    { dataHora: "01/06 10:30",time1: this.timeRessaca, placarTime1: 7, time2: this.timeGama, placarTime2: 6 }
  ]

  public rodadas2 = [
    { dataHora: "08/06 08:30",time1: this.timeCrystalPalace, placarTime1: 3, time2: this.timeRealBlack, placarTime2: 0 },
    { dataHora: "08/06 09:30",time1: this.timeTaquaral, placarTime1: 21, time2: this.timeFuria, placarTime2: 1 },
    { dataHora: "08/06 10:30",time1: this.timeLions, placarTime1: 2, time2: this.timeGalaticos, placarTime2: 10 },
    { dataHora: "15/06 08:30",time1: this.timeGama, placarTime1: 99, time2: this.timeBelaVista, placarTime2: 99 },
    { dataHora: "15/06 09:30",time1: this.timeNovaGeracao, placarTime1: 99, time2: this.timeRessaca, placarTime2: 99 }
  ]

  public rodadas3 = [
    { dataHora: "15/06 10:30",time1: this.timeFuria, placarTime1: 99, time2: this.timeRealBlack, placarTime2: 99 },
    { dataHora: "22/06 08:30",time1: this.timeRessaca, placarTime1: 99, time2: this.timeTaquaral, placarTime2: 99 },
    { dataHora: "22/06 09:30",time1: this.timeCrystalPalace, placarTime1: 99, time2: this.timeGalaticos, placarTime2: 99 },
    { dataHora: "22/06 10:30",time1: this.timeNovaGeracao, placarTime1: 99, time2: this.timeBelaVista, placarTime2: 99 },
    { dataHora: "29/06 08:30",time1: this.timeLions, placarTime1: 99, time2: this.timeGama, placarTime2: 99 }
  ]

  public rodadas4 = [
    { dataHora: "29/06 09:50",time1: this.timeBelaVista, placarTime1: 99, time2: this.timeTaquaral, placarTime2: 99 },
    { dataHora: "29/06 10:30",time1: this.timeFuria, placarTime1: 99, time2: this.timeGalaticos, placarTime2: 99 },
    { dataHora: "06/07 08:30",time1: this.timeLions, placarTime1: 99, time2: this.timeNovaGeracao, placarTime2: 99 },
    { dataHora: "06/07 09:30",time1: this.timeGama, placarTime1: 99, time2: this.timeCrystalPalace, placarTime2: 99 },
    { dataHora: "06/07 10:30",time1: this.timeRealBlack, placarTime1: 99, time2: this.timeRessaca, placarTime2: 99 }
  ]

  public rodadas5 = [
    { dataHora: "13/07 08:30",time1: this.timeGalaticos, placarTime1: 99, time2: this.timeRessaca, placarTime2: 99 },
    { dataHora: "13/07 09:30",time1: this.timeTaquaral, placarTime1: 99, time2: this.timeLions, placarTime2: 99 },
    { dataHora: "13/07 10:30",time1: this.timeCrystalPalace, placarTime1: 99, time2: this.timeNovaGeracao, placarTime2: 99 },
    { dataHora: "20/07 09:00",time1: this.timeGama, placarTime1: 99, time2: this.timeFuria, placarTime2: 99 },
    { dataHora: "20/07 10:00",time1: this.timeRealBlack, placarTime1: 99, time2: this.timeBelaVista, placarTime2: 99 }
  ]

  public patrocinadores = [
    { nome: 'Distribuidora Altas Horas', img: 'https://dc702.4shared.com/img/KzUPv9KZku/s24/196fe0b3ec0/altahoras?async=&rand=0.5181125757639943', imgsemfundo: 'https://dc706.4shared.com/img/pcvbB9k1ku/s23/196fddb60d8/altahoras' },
    { nome: 'Arruda Viagens Turismo', img: 'https://dc702.4shared.com/img/wxbfe2B_ku/s24/196fe0b42a8/aruudaTurismo?async&rand=0.8531908915386023', imgsemfundo: 'https://dc706.4shared.com/img/rVjWMQ2hjq/s24/196fddb3db0/aruudaTurismo?async&rand=0.9494467785303145' }, 
    { nome: 'Bar Do Deley', img: 'https://dc702.4shared.com/img/8ayDV7bAge/s24/196fe0b42a8/BarDoDeley?async&rand=0.8001959591888185', imgsemfundo: 'https://dc706.4shared.com/img/M6ZEjvIWjq/s24/196fddb4198/BarDoDeley?async&rand=0.19528696376383214' },
    { nome: 'Black Cell', img: 'https://dc702.4shared.com/img/dkQgsm8Ifa/s24/196fe0b1f80/blackcell?async&rand=0.5043420305875644', imgsemfundo: 'https://dc706.4shared.com/img/FTWlwK9Jjq/s24/196fddb4198/blackcell?async&rand=0.5485528688767869' },
    { nome: 'Cantinho Da Cohab', img: 'https://dc702.4shared.com/img/bqjJeutFjq/s24/196fe0b2368/cantinhoCohab?async&rand=0.14785866817531212', imgsemfundo: 'https://dc706.4shared.com/img/89dskj_Wfa/s24/196fddb4580/cantinhoCohab?async&rand=0.42769872967344336' },
    { nome: 'Espaço Vip', img: 'https://dc702.4shared.com/img/NpdCJMbhfa/s24/196fe0b2750/EspacoVip?async&rand=0.5049991782314994', imgsemfundo: 'https://dc706.4shared.com/img/iv8dqNBsku/s24/196fddb4968/EspacoVip?async&rand=0.5696122012385244' },
    { nome: 'W. P. A.', img: 'https://dc780.4shared.com/img/ZHaFkvYWku/s24/196fe1bc150/heltontamp?async&rand=0.2813631738956728', imgsemfundo: 'https://dc706.4shared.com/img/RvPkGsDgfa/s24/196fddb4968/helton?async&rand=0.6940261625992823' },
    { nome: 'Inaka', img: 'https://dc702.4shared.com/img/5CHTh-fage/s24/196fe0b2b38/inaka?async&rand=0.36155080644127635', imgsemfundo: 'https://dc706.4shared.com/img/FrS-ptksjq/s24/196fddb5138/inaka__1_?async&rand=0.32706802513532407' },
    { nome: 'Joval', img: 'https://dc702.4shared.com/img/Q-ee_Mloge/s24/196fe0b3308/JovaltamPatrocinador?async&rand=0.5788571275796767', imgsemfundo: 'https://dc706.4shared.com/img/3uCYqpxsfa/s24/196fddb5138/Joval?async&rand=0.6520072542926673' },
    { nome: 'Joval', img: 'https://dc780.4shared.com/img/DoSmxSnKjq/s24/196fe1531a0/JovalPostotamP?async&rand=0.2916699857096492', imgsemfundo: 'https://dc706.4shared.com/img/9ZPDNcciku/s24/196fddb5cf0/JovalPosto?async&rand=0.8328207882014785' },
    { nome: 'Mercearia do Messias', img: 'https://dc702.4shared.com/img/SBqzM5W3ge/s24/196fe10e7f8/messias?async&rand=0.6876800525221656', imgsemfundo: 'https://dc706.4shared.com/img/PcnoBlovku/s24/196fddb5520/messias?async&rand=0.6976166671619564' },
    { nome: 'Paz', img: 'https://dc702.4shared.com/img/ich7Gxzwku/s24/196fe0b36f0/Paz?async&rand=0.2163858505828521', imgsemfundo: 'https://dc706.4shared.com/img/lsFe_VlEfa/s24/196fddb5520/Paz?async&rand=0.9079606010720278' },
    { nome: 'Poker', img: 'https://dc702.4shared.com/img/ZdYtqIFcfa/s24/196fe0b36f0/Poker__1_?async&rand=0.7404340561842451', imgsemfundo: 'https://dc706.4shared.com/img/Ng4jmgDbku/s24/196fddb5908/Poker?async&rand=0.3110982278650879' },
    { nome: 'Rc_NET', img: 'https://dc702.4shared.com/img/otmjZ0mRge/s24/196fe0b3ad8/rcNet?async&rand=0.034710587021495876', imgsemfundo: 'https://dc706.4shared.com/img/uxmuqRFsge/s24/196fddb5908/rcNet?async&rand=0.07802387521443876' },
    { nome: 'Tendencia Modas', img: 'https://dc702.4shared.com/img/8A8c1qRRku/s24/196fe0b3ec0/tendenciamodas?async&rand=0.8984266894709452', imgsemfundo: 'https://dc706.4shared.com/img/J-FFqFssjq/s24/196fde88420/tendenciamodas?async&rand=0.8410412887123966' }
  ]
  
  
  public CraqueRodada1 =
  [
    {nome: 'Eduardo Mota', time: 'Taquaral', jogo: this.rodadas1[0] ,img: 'https://dc704.4shared.com/img/jYSGPqfOge/s24/1974d77f688/DuzinhoCrackeJogo?async&rand=0.45955893114241275'},
    {nome: 'Joel Silva', time: 'Real Black', jogo: this.rodadas1[1] ,img: 'https://dc704.4shared.com/img/Spy7G_7vjq/s24/1974d77f688/joelCrackeJogo?async&rand=0.3806267336210124'},
    {nome: 'Wender', time: 'Nova Geração', jogo: this.rodadas1[2] ,img: 'https://dc704.4shared.com/img/kkOLFJMvfa/s24/1974d77eeb8/WeuderCrackeJogo?async&rand=0.08654257706150548'},
    {nome: 'Jeferson', time: 'Bela Vista', jogo: this.rodadas1[3] ,img: 'https://dc704.4shared.com/img/u17qAurKfa/s24/1974d77fe58/JehCrackeJogo?async&rand=0.38531814544222387'},
    {nome: 'Raffa', time: 'Ressaca', jogo: this.rodadas1[4] ,img: 'https://dc704.4shared.com/img/V2UPkHxWku/s24/1974d77fa70/RafaCrackeJogo?async&rand=0.7121489893680867'},
  ];

  public artilheirosCopa =
  [
    {time: 'Real Black', nome: 'Herson Pereira', gols: 1, img: this.timeRealBlack[0].img},
    {time: 'Real Black', nome: 'Joel Silva', gols: 1, img: this.timeRealBlack[0].img},
    {time: 'Real Black', nome: 'Deivid Silva', gols: 1, img: this.timeRealBlack[0].img},
    {time: 'Lions', nome: 'Diogo', gols: 1, img: this.timeLions[0].img},
    {time: 'Lions', nome: 'Lucas Fiori', gols: 1, img: this.timeLions[0].img},
    {time: 'Lions', nome: 'Rian Joioz', gols: 1, img: this.timeLions[0].img},
    {time: 'Lions', nome: 'Danilo Dias', gols: 1, img: this.timeLions[0].img},
    {time: 'Lions', nome: 'Matheus Firmino', gols: 1, img: this.timeLions[0].img},
    {time: 'Crystal Palace', nome: 'Felipe Romão', gols: 1, img: this.timeCrystalPalace[0].img},
    {time: 'Crystal Palace', nome: 'André Luiz', gols: 1, img: this.timeCrystalPalace[0].img},
    {time: 'Crystal Palace', nome: 'João Macedo', gols: 2, img: this.timeCrystalPalace[0].img},
    {time: 'Taquaral', nome: 'Felipe Mendes', gols: 3, img: this.timeTaquaral[0].img},
    {time: 'Taquaral', nome: 'Eduardo Mota', gols: 9, img: this.timeTaquaral[0].img},
    {time: 'Taquaral', nome: 'Rafael dos S. Mariano', gols: 6, img: this.timeTaquaral[0].img},
    {time: 'Taquaral', nome: 'Carlos Daniel da Silva', gols: 3, img: this.timeTaquaral[0].img},
    {time: 'Taquaral', nome: 'Joao', gols: 1, img: this.timeTaquaral[0].img},
    {time: 'Taquaral', nome: 'cesar', gols: 1, img: this.timeTaquaral[0].img},
    {time: 'Taquaral', nome: 'Rodrigo', gols: 2, img: this.timeTaquaral[0].img},
    {time: 'Taquaral', nome: 'Mauricio Cesario', gols: 2, img: this.timeTaquaral[0].img},
    {time: 'Ressaca', nome: 'Agenor', gols: 1, img: this.timeRessaca[0].img},
    {time: 'Ressaca', nome: 'Felipe Oliveira', gols: 2, img: this.timeRessaca[0].img},
    {time: 'Ressaca', nome: 'Bruno Souza', gols: 2, img: this.timeRessaca[0].img},
    {time: 'Ressaca', nome: 'Luan Leal', gols: 1, img: this.timeRessaca[0].img},
    {time: 'Ressaca', nome: 'Gabriel Froes', gols: 1, img: this.timeRessaca[0].img},
    {time: 'Gama', nome: 'Guilherme', gols: 1, img: this.timeGama[0].img},
    {time: 'Gama', nome: 'Arthur Silva', gols: 1, img: this.timeGama[0].img},
    {time: 'Gama', nome: 'Lucas Vidal', gols: 2, img: this.timeGama[0].img},
    {time: 'Gama', nome: 'Phelipe', gols: 2, img: this.timeGama[0].img},
    {time: 'Furia', nome: 'Henquei Sabino', gols: 1, img: this.timeFuria[0].img},
    {time: 'Furia', nome: 'Max', gols: 1, img: this.timeFuria[0].img},
    {time: 'Furia', nome: 'Maxdener Saraiva', gols: 1, img: this.timeFuria[0].img},
    {time: 'Nova Geração', nome: 'Vitor Vitali', gols: 2, img: this.timeNovaGeracao[0].img},
    {time: 'Nova Geração', nome: 'Wender', gols: 3, img: this.timeNovaGeracao[0].img},
    {time: 'Nova Geração', nome: 'Bruno souza', gols: 1, img: this.timeNovaGeracao[0].img},
    {time: 'Nova Geração', nome: 'Daniel Firmino', gols: 2, img: this.timeNovaGeracao[0].img},
    {time: 'Galaticos', nome: 'Lucas Oliveira', gols: 4, img: this.timeGalaticos[0].img},
    {time: 'Galaticos', nome: 'Paulo Araujo', gols: 1, img: this.timeGalaticos[0].img},
    {time: 'Galaticos', nome: 'Guilherme Dimei', gols: 4, img: this.timeGalaticos[0].img},
    {time: 'Galaticos', nome: 'Jeferson Ribeiro', gols: 2, img: this.timeGalaticos[0].img},
    {time: 'Galaticos', nome: 'Paulo Fernando', gols: 3, img: this.timeGalaticos[0].img},
    {time: 'Galaticos', nome: 'Gerson', gols: 2, img: this.timeGalaticos[0].img},
    {time: 'Bella vista', nome: 'Jeferson Justino', gols: 4, img: this.timeBelaVista[0].img},
    {time: 'Bella vista', nome: 'Adrian Rodrigues', gols: 1, img: this.timeBelaVista[0].img},
    {time: 'Bella vista', nome: 'Doglas Sousa', gols: 2, img: this.timeBelaVista[0].img},
    {time: 'Bella vista', nome: 'Juvani Gomes', gols: 1, img: this.timeBelaVista[0].img},
    {time: 'Bella vista', nome: 'Alex', gols: 1, img: this.timeBelaVista[0].img},
    {time: 'Bella vista', nome: 'Igor Leandro', gols: 1, img: this.timeBelaVista[0].img}
  ];


  constructor() { }
  
}

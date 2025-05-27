import { Component, OnInit } from '@angular/core';

import { TableModule } from 'primeng/table';
import { CampeonatoService } from '../../services/campeonato.service';

@Component({
  selector: 'app-tabelaartilheiro',
  imports: [TableModule],
  templateUrl: './tabelaartilheiro.component.html',
  styleUrl: './tabelaartilheiro.component.css'
})
export class TabelaartilheiroComponent implements OnInit {
  artilheiros: any[] = [];  

  constructor(private campeonatoService: CampeonatoService) {
    
  }

  ngOnInit() {
   this.artilheiros = this.calcularClassificacao(this.campeonatoService.artilheirosCopa);
  }

   calcularClassificacao(artilheiro: any[]) {
     const maisGol = [...artilheiro].sort((a, b) => {
      if (b.gols !== a.gols) return b.gols - a.gols;
      return 0;
    });
    return maisGol;
   }

}

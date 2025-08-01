import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { CampeonatoService } from '../../services/campeonato.service';

@Component({
  selector: 'app-chaveamento',
  imports: [OrganizationChartModule],
  templateUrl: './chaveamento.component.html',
  styleUrl: './chaveamento.component.css'
})
export class ChaveamentoComponent implements OnInit{

  constructor(private campeonatoservice: CampeonatoService) {}

  timeRessaca: any[] =[];
  timeCrystalPalace: any[] =[];
  timeNovaGeracao: any[] =[];
  timeGalaticos: any[] =[];
  timeBelaVista: any[] =[];
  timeTaquaral: any[] =[];
   tvConsoni: any = []

  ngOnInit(): void {
    this.timeRessaca = this.campeonatoservice.timeRessaca
    this.timeCrystalPalace = this.campeonatoservice.timeCrystalPalace
    this.timeNovaGeracao = this.campeonatoservice.timeNovaGeracao
    this.timeGalaticos = this.campeonatoservice.timeGalaticos
    this.timeBelaVista = this.campeonatoservice.timeBelaVista
    this.timeTaquaral = this.campeonatoservice.timeTaquaral
     this.tvConsoni = this.campeonatoservice.tvConsoni;    
  }

  


  

}

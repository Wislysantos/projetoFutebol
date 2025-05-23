import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CampeonatoService } from '../../services/campeonato.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-patrocino',
  imports: [CardModule, CommonModule],
  templateUrl: './patrocino.component.html',
  styleUrl: './patrocino.component.css'
})

export class PatrocinoComponent implements OnInit{
  
  constructor(private campeonatoService: CampeonatoService) {}

  patrocinadores: any[] = [];

  ngOnInit(): void {
    this.patrocinadores = this.campeonatoService.patrocinadores
    console.log(this.patrocinadores);
  }

}

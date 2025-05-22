import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-navabar',
  imports: [ToolbarModule, ButtonModule, ImageModule],
  templateUrl: './navabar.component.html',
  styleUrl: './navabar.component.css'
})
export class NavabarComponent {

}

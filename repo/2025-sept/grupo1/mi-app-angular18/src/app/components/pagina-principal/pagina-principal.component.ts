import { Component } from '@angular/core';
import { MenuComponent2 } from '../menu2/menu2.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenuComponent2, CommonModule],
  templateUrl: './pagina-principal.component.html',
})
export class PaginaPrincipalComponent {
  // Aquí puedes poner lógica del dashboard si la necesitas
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  conta = 0;

  cont() {
    setInterval(() => {
      this.conta = this.conta + 1;
    }, 1000);
  }
}

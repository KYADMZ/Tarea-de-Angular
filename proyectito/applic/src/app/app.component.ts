import { NgFor, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
  
})


export class AppComponent {

  constructor(private router: Router) { }
  
  Ejemplito(){
    this.router.navigate(['/ejemplito']);
  }
  Inicio(){
    this.router.navigate(['/inicio']);
  }
  Info(){
    this.router.navigate(['/']);
  }
}



import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Component, OnInit, inject, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit{
  router = inject(Router);
  getstarted(){
    this.router.navigate(['/download']);
  }

  ngOnInit(): void {

  }

}

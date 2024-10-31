import {  RouterLink, RouterModule, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-404',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './404.component.html',
  styleUrl: './404.component.scss'
})
export class Page404Component {
  constructor(private router: Router){}
}

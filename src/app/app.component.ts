import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, Output, output } from '@angular/core';
import {  Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent,CommonModule,RouterOutlet,RouterLink,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements DoCheck {
  log! :boolean;


  constructor( private AuthService:AuthService,private router: Router){

  }
  ngDoCheck(): void {
    this.log = this.AuthService.isLoggedIn() ;
    console.log('hi')
  }

  logout(){
    return this.AuthService.logout() ;
  }

}




import { Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { LoginComponent } from '../app/components/login/login.component';
import { AuthGuard } from '../app/services/auth/auth.guard';
import { DownloadPageComponent } from '../app/components/download-page/download-page.component';
import { AboutUsComponent } from '../app/components/about-us/about-us.component';
import { Page404Component } from '../app/components/404/404.component';
import { SignupComponent } from '../app/components/signup/signup.component';
import { FeatureComponent } from '../app/components/feature/feature.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'download',
    loadComponent : ()=> import('../app/components/download-page/download-page.component').then(c => c.DownloadPageComponent) ,
    canActivate: [AuthGuard],

  },
  {
    path: 'about-us',
    loadComponent:()=> import('../app/components/about-us/about-us.component').then(c => c.AboutUsComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'signup',
    loadComponent : ()=> import('../app/components/signup/signup.component').then( c => c.SignupComponent) ,
  },
  {
    path: 'login',
    loadComponent: ()=> import('../app/components/login/login.component').then(c => c.LoginComponent) ,

  },
  {
    path:'feature',
    component:FeatureComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: Page404Component,
  },
  {
    path: '**',
    canActivate: [AuthGuard], //* this check if u r authed it will redirect u to login page || if u r NOT authed u see 404 page
    component: Page404Component,
  },
];

import { Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { LoginComponent } from '../app/components/login/login.component';
import { AuthGuard } from '../app/auth.guard';
import { DownloadPageComponent } from '../app/components/download-page/download-page.component';
import { AboutUsComponent } from '../app/components/about-us/about-us.component';
import { Page404Component } from '../app/404/404.component';
import { SignupComponent } from '../app/signup/signup.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'download',
    component: DownloadPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
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
    canActivate: [AuthGuard], // this check if u r authed it will redirect u to login page || if u r NOT authed u see 404 page
    component: Page404Component,
  },
];

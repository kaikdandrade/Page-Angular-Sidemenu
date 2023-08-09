import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment as env } from 'src/environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { E404Component } from './pages/e404/e404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    title: `${env.appName} - Ínicio`,
    component: HomeComponent
  },
  {
    path: '404',
    title: `${env.appName} - Error 404`,
    component: E404Component
  },
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

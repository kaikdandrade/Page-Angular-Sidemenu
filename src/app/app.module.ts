import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MainHeaderComponent } from './comp/main-header.component';
import { AppRoutingModule } from './app-routing.module';
import { E404Component } from './pages/e404/e404.component';
import { AppButtonComponent } from './comp/app-button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainHeaderComponent,
    AppButtonComponent,
    E404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from 'src/environments/environment';
import { GeneralService } from './services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public env = environment;
  public general: GeneralService = inject(GeneralService);
  private router: Router = inject(Router);

  public appPages = [
    { title: 'Ínicio', url: '/home', icon: 'fa-solid fa-house' },
    { title: 'Componente 2', url: '/componente2', icon: 'fa-solid fa-icons' }
  ];

  ngOnInit(): void {
    // Adiciona os eventos necessários para fechar o menu lateral
    // Adds the necessary events to close the side menu
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        document.getElementsByTagName('aside')[0].classList.remove('active')
      }
    });

    window.addEventListener('click', (e) => {
      const menuButton = document.getElementsByClassName('menuButton')[0];
      if (menuButton && (e.target === menuButton || menuButton.contains(e.target as Node))) {
        return
      }

      const asideElement = document.getElementsByTagName('aside')[0];
      if (asideElement && (e.target === asideElement || asideElement.contains(e.target as Node))) {
        return
      }

      asideElement.classList.remove('active')
    })
  }
}
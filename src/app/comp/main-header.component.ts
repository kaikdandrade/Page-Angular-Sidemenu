import { Component, inject, Input } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-main-header',
  template: `
    <div class="header">
      <div class="menuButton" (click)="general.openMenu()">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>

      <p class="menuTitle text-title">
        <ng-content></ng-content>
      </p>

      <div class="menuIcon">
        <i class="{{ icon }} icon-large"></i>
      </div>
    </div>
  `
})
export class MainHeaderComponent {
  public general: GeneralService = inject(GeneralService);
  @Input() icon: string = 'fa-solid fa-icons';
}
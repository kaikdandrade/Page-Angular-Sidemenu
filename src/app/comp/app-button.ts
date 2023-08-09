import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button type="button" [ngClass]="{'btn-icon': icon !== '', 'btn': icon === ''}">
      <i class="{{ icon }} icon" *ngIf="icon !== ''"></i>
      <ng-content></ng-content>
    </button>
  `
})
export class AppButtonComponent {
  @Input() icon: string = '';
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  public loading = false;
  public alert = false;
  
  openMenu() {
    const menu = document.getElementsByTagName('aside')[0];
    menu.classList.toggle('active')
  }

  toggleLoading() {
    this.loading = !this.loading
  }

  toggleAlert() {
    this.alert = !this.alert
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  showBanner: boolean = true

  toggleBanner(): void {
    this.showBanner = !this.showBanner
  }
}

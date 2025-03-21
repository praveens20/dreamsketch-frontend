import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  opened = false; // Sidebar default state

  constructor() {}

  ngOnInit() {}

  toggleSidebar() {
    this.opened = !this.opened;
  }
}

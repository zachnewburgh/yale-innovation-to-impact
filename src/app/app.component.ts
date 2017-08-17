import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayNav: boolean;

  constructor() { }

  toggleNav() {
    this.displayNav = !this.displayNav;
  }

  scrollTo(section: string) {
    this.toggleNav();
    return location.hash = `#${section}`;
  }
}

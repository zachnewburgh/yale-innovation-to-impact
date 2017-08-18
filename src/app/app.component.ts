import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayNav: boolean;
  sections: any[];

  constructor() {
    this.sections = [
      {
        title: 'The Program',
        id: 'about'
      },
      {
        title: 'Objectives',
        id: 'bullets'
      },
      {
        title: 'Team',
        id: 'team'
      },
      {
        title: 'Apply',
        id: 'apply'
      }
    ]
  }

  toggleNav() {
    this.displayNav = !this.displayNav;
  }

  scrollTo(section: string) {
    this.toggleNav();
    return location.hash = `#${section}`;
  }
}

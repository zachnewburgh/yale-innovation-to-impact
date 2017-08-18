import { Component } from '@angular/core';
import { ISection } from './shared/section.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayNav: boolean;
  sections: ISection[];

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

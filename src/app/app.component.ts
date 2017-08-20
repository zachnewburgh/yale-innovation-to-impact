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
        title: 'Sign Up',
        id: 'apply'
      },
      {
        title: 'Apply',
        id: 'qualtrics'
      }
    ]
  }

  toggleNav() {
    this.displayNav = !this.displayNav;
  }

  scrollTo(section: string) {
    this.toggleNav();
    if (section === 'qualtrics') {
      window.open('https://yalesurvey.qualtrics.com/jfe/form/SV_3sD8p6YV3S1YmHz');
    } else {
      return location.hash = `#${section}`;
    }
  }
}

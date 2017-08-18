import { Component, OnInit } from '@angular/core';
import { ITeamMember } from './team-member.interface';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  title: string;
  teamMembers: ITeamMember[];

  constructor() {}

  ngOnInit() {
    this.title = 'THE TEAM';
    this.teamMembers = [
      {
        id: 'seth',
        imgPath: '../../assets/sf-sm.jpg',
        name: 'Seth Feuerstein, MD, JD',
        role: 'Program Director (PI)',
        url: 'http://psychiatry.yale.edu/people/seth_feuerstein.profile'
      },
      {
        id: 'patricia',
        imgPath: '../../assets/ps-sm.jpg',
        name: 'Patricia Simon, PhD',
        role: 'Program Director',
        url: 'https://medicine.yale.edu/psychiatry/people/p_simon.profile'
      },
      {
        id: 'erika',
        imgPath: '../../assets/es-bg.jpg',
        name: 'Erika Smith, MBA',
        role: 'Advisor',
        url: 'http://ocr.yale.edu/about-ocr/our-staff/erika-smith'
      },
      {
        id: 'janie',
        imgPath: '../../assets/jm-sm.jpg',
        name: 'Janie Merkel, PhD',
        role: 'Advisor',
        url: 'http://ycmd.yale.edu/people/janie-merkel'
      },
      {
        id: 'rick',
        imgPath: '../../assets/rh-bg.jpg',
        name: 'Rick Hunt, MBA',
        role: 'Faculty/Mentor Lead',
        url: 'http://yei.yale.edu/richard-hunt'
      },
      {
        id: 'joanne',
        imgPath: '../../assets/jr-sm.jpg',
        name: 'Joanne Richardson, BS',
        role: 'Program Coordinator',
        url: 'http://people.yale.edu/search/joanne_richardson.profile'
      }
    ];
  }

  openPage(url: string): void {
    window.open(url);
  }

}

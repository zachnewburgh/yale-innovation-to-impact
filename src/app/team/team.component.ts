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
        name: 'Seth Feuerstein, MD, PhD',
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
        id: 'gregory',
        imgPath: '../../assets/gl-sm.jpg',
        name: 'Gregory P. Licholai, MD, MBA',
        role: 'Faculty Lead',
        url: 'https://som.yale.edu/gregory-p-licholai'
      },
      {
        id: 'kristin',
        imgPath: '../../assets/kb-sm.png',
        name: 'Kristin Budde, MD, MPH',
        role: 'Curriculum Development Lead',
        url: 'https://medicine.yale.edu/psychiatry/education/residency/about/kristin_budde.profile'
      },
      {
        id: 'rick',
        imgPath: '../../assets/rh-sm.jpg',
        name: 'Rick Hunt, MBA',
        role: 'Faculty/Mentor Lead',
        url: 'http://yei.yale.edu/richard-hunt'
      },
      {
        id: 'janis',
        imgPath: '../../assets/jc-sm.jpg',
        name: 'Janis Celone',
        role: 'Program Coordinator',
        url: 'http://people.yale.edu/search/janis_celone.profile'
      },
      {
        id: 'janie',
        imgPath: '../../assets/jm-sm.jpg',
        name: 'Janie Merkel, PhD',
        role: 'Advisor',
        url: 'http://ycmd.yale.edu/people/janie-merkel'
      }
    ];
  }

  openPage(url: string): void {
    window.open(url);
  }

}

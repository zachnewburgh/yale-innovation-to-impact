import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamMembers: any;

  constructor() { }

  ngOnInit() {
    this.teamMembers = {
      sethFeuerstein: 'http://psychiatry.yale.edu/people/seth_feuerstein.profile',
      patriciaSimon: 'https://medicine.yale.edu/psychiatry/people/p_simon.profile',
      erikaSmith: 'http://ocr.yale.edu/about-ocr/our-staff/erika-smith',
      janieMerkel: 'http://ycmd.yale.edu/people/janie-merkel',
      rickHunt: 'http://yei.yale.edu/richard-hunt',
      joanneRichardson: 'http://people.yale.edu/search/joanne_richardson.profile'
    }
  }

  openPage(name: string) {
    const url = this.teamMembers[name];
    return url ? window.open(url) : '';
  }

}

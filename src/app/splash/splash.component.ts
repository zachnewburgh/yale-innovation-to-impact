import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  img: string;
  date: string;
  dueDate: string;
  description: string;

  constructor() { }

  ngOnInit() {
    this.img = '../assets/innovation-logo.png';
    this.date = 'April 23-27, 2018';
    this.dueDate = 'Jan. 5';
    this.description = 'Empowering Substance Use Researchers to Translate their Innovations from the Lab to the World';
  }

  go(coord: number) {
    window.scrollTo(0, coord);
  }

}

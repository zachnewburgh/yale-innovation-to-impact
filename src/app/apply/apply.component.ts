import { Component, OnInit } from '@angular/core';
import { ISocialMedia } from './social-media.interface';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  socials: ISocialMedia[];

  constructor() { }

  ngOnInit() {
    this.socials = [
      {
        name: 'Twitter',
        img: '../assets/twitter-logo.png',
        url: 'https://twitter.com/innovateatyale'
      },
      {
        name: 'Facebook',
        img: '../assets/fb-logo.png',
        url: 'https://www.facebook.com/Innovation-to-Impact-at-Yale-1070091563126082/'
      }
    ];
  }

  openPage(url: string): void {
    window.open(url);
  }

}

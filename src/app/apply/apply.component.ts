import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  socialMedia: any;

  constructor() { }

  ngOnInit() {
    this.socialMedia = {
      Facebook: 'https://www.facebook.com/Innovation-to-Impact-at-Yale-1070091563126082/',
      Twitter: 'https://twitter.com/innovateatyale'
    }
  }

  openPage(name: string) {
    const url = this.socialMedia[name];
    return url ? window.open(url) : '';
  }

}

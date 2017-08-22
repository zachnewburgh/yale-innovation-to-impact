import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bullets',
  templateUrl: './bullets.component.html',
  styleUrls: ['./bullets.component.css']
})
export class BulletsComponent implements OnInit {
  bulletsMap: any;

  constructor() { }

  ngOnInit() {
    this.bulletsMap = {
      first: {
        title: '1. FIVE-DAY BOOTCAMP IN PRODUCT DEVELOPMENT AND ENTREPRENEURSHIP',
        description: 'Learn how to identify viable commercial products and efficiently take your product to market.'
      },
      second: {
        title: '2. POST-BOOTCAMP VIRTUAL OFFICE HOURS',
        description: 'Grow your idea by consulting an extensive network of mentors from industry, venture capital and academia.'
      },
      third: {
        title: '3. SEED FUNDING',
        description: 'Take the first steps toward exploring the commercial viability of your idea with one of our small grants.'
      },
      fourth: {
        title: '4. BE A VENTURE AMBASSADOR',
        description: 'With support from our team, learn how to bring a culture of entrepreneurship to your department.'
      }
    }
  }

}

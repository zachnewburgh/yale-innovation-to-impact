import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  displayNav: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleNav() {
    this.displayNav = !this.displayNav;
  }

  go(coord: number) {
    window.scrollTo(0, coord);
  }

}

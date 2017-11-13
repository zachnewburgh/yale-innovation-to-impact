import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title: string;
  description: string;
  info: any;

  constructor() { }

  ngOnInit() {
    this.title = 'THE PROGRAM';
    this.description = `
      Twenty million people are struggling with substance use disorders and the yearly economic impact in the US is $193B.  Innovations that
      could help substance users are not reaching the public fast enough.  To address these challenges, Innovation to Impact at Yale was
      developed as a national program to provide education, mentorship and seed funding to innovators.  The program is led by a team of
      top-tier educators and entrepreneurs with the overriding goal to advance ideas to IMPACT the world.
    `

    this.info = {
      WHAT: `
        A five-day program in New Haven, CT focused on teaching participants diverse skills through hands-on-learning activities with
        guidance from dynamic leaders.  The program culminates in a Certificate in Entrepreneurship.`,
      WHEN: `April 23-27, 2018.`,
      COST: `Costs for travel, food, and accommodations will be covered for applicants who are selected for this prestigious program.`,
      WHO: `Curious and committed innovators who are interested in both exploring what it takes to bring a product to market and
            applying creative solutions to combat substance abuse through the use of pharmaceuticals, diagnostics, biomedical devices,
            app development, behavioral interventions, and/or public policy.  Preference provided to researchers who have received NIDA
            funding.`
    }
  }

  get infoHeadings(): string[] {
    return Object.keys(this.info);
  }
}

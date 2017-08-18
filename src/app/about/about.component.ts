import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title: string;
  description: string;

  constructor() { }

  ngOnInit() {
    this.title = 'THE PROGRAM';
    this.description = `
      Innovation to Impact is a NIDA-funded education program in product development and entrepreneurship hosted at Yale University. We run
      a free 5-day bootcamp for students, trainees (e.g postdoctoral fellows) and faculty who are curious about how business principles
      might help increase the reach of their research innovations. We recruit substance abuse researchers focused on basic science,
      epidemiology, prevention, treatment and policy. We are interested in innovations that can impact any aspect of the substance use field
      (e.g., pharmaceuticals, diagnostics, biomedical devices, app development, behavioral interventions). We are also interested in
      scientists who may not have an innovation yet, but would like to be prepared to act when one emerges from their work.
    `
  }

}

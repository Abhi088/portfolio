import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('0.5s', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Software Engineer',
      company: 'MyAnatomy Integrations',
      period: '2021 - Present',
      description:
        'Working as a backend developer to build and maintain enterprise-grade applications. Developing RESTful APIs and microservices using Java and Spring Boot. Working with PostgreSQL databases and implementing efficient data access patterns.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'RESTful APIs', 'Microservices'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Devslane',
      period: '2019 - 2021',
      description:
        'Developed and maintained multiple web applications for clients across different industries. Collaborated with design and product teams to implement responsive UI components using React.js and Angular. Built backend services with Node.js and Java Spring Boot.',
      technologies: ['React.js', 'Angular', 'Node.js', 'Java', 'Spring Boot', 'MySQL'],
    },
  ];

  constructor() {
    console.log(this.experiences); // You can initialize any properties or services here if needed
  }
}

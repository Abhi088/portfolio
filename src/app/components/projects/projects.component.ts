import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'TutorSage',
      description:
        'An online learning platform that connects students with tutors. Features include video conferencing, scheduling, course management, and payment processing.',
      image: '/assets/images/placeholder.svg',
      technologies: ['React.js', 'Redux', 'Redux Saga', 'TypeScript', 'Spring Boot', 'MySQL'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'TimeBank',
      description:
        'A time-tracking and project management application for freelancers and teams. Helps users track hours, manage projects, and generate invoices.',
      image: '/assets/images/placeholder.svg',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux', 'JWT'],
      liveLink: '#',
      githubLink: '#',
    },
  ];
}

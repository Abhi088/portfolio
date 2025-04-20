import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Frontend',
      icon: 'fa-globe',
      skills: ['React.js', 'Redux', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Angular'],
    },
    {
      title: 'Backend',
      icon: 'fa-server',
      skills: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'RESTful APIs', 'Microservices'],
    },
    {
      title: 'Databases',
      icon: 'fa-database',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'ORM Tools'],
    },
    {
      title: 'Cloud & DevOps',
      icon: 'fa-cloud',
      skills: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'GitHub Actions'],
    },
    {
      title: 'Analytics & Tools',
      icon: 'fa-chart-bar',
      skills: ['Data Analysis', 'Reporting Tools', 'Performance Optimization', 'Debugging'],
    },
    {
      title: 'Development Tools',
      icon: 'fa-wrench',
      skills: ['IntelliJ IDEA', 'VS Code', 'Git', 'Jira', 'Confluence', 'Postman'],
    },
  ];
}

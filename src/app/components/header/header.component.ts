import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMobileMenuOpen = false;
  isDarkMode = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    const html = document.documentElement;
    html.classList.toggle('dark', this.isDarkMode);
  }

}

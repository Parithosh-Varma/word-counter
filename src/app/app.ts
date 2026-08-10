import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdSlot } from './ad-slot';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdSlot],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  readonly title = 'Word Counter';
  readonly repoUrl = 'https://github.com/parithosh-varma/word-counter';
  readonly currentYear = new Date().getFullYear();
  dark = false;

  ngOnInit(): void {
    const stored = localStorage.getItem('theme');
    this.dark = stored
      ? stored === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.apply();
  }

  toggleTheme(): void {
    this.dark = !this.dark;
    localStorage.setItem('theme', this.dark ? 'dark' : 'light');
    this.apply();
  }

  private apply(): void {
    document.documentElement.classList.toggle('dark', this.dark);
  }
}
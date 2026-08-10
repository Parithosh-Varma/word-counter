import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  text = '';
  excludeSpaces = false;

  get words(): number {
    const m = this.text.trim().match(/\S+/g);
    return m ? m.length : 0;
  }

  get chars(): number {
    return this.text.length;
  }

  get charsNoSpaces(): number {
    return this.text.replace(/\s/g, '').length;
  }

  get sentences(): number {
    const m = this.text.match(/[^.!?]+[.!?]+/g);
    return m ? m.length : this.text.trim() ? 1 : 0;
  }

  get paragraphs(): number {
    return this.text.trim() ? this.text.trim().split(/\n\s*\n/).filter(Boolean).length : 0;
  }

  get readingMinutes(): string {
    const w = this.words;
    if (!w) return '0s';
    const min = w / 200;
    if (min < 1) return `${Math.max(1, Math.round(min * 60))}s`;
    return `${min.toFixed(1)}m`;
  }

  clear(): void {
    this.text = '';
  }
}
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

  get topWords(): Array<{ word: string; count: number }> {
    const freq = new Map<string, number>();
    const matches = this.text.toLowerCase().match(/[a-z]{3,}/g) ?? [];
    for (const w of matches) freq.set(w, (freq.get(w) ?? 0) + 1);
    return Array.from(freq.entries())
      .map(([word, count]) => ({ word, count }))
      .sort((a, b) => b.count - a.count || a.word.localeCompare(b.word))
      .slice(0, 5);
  }

  clear(): void {
    this.text = '';
  }
}
import { Component, input, AfterViewInit, ElementRef, inject, OnDestroy } from '@angular/core';
import { AD_CLIENT_ID } from './ads-config';

export type AdSlotFormat = 'leaderboard' | 'square' | 'banner';

@Component({
  selector: 'app-ad-slot',
  standalone: true,
  template: `
    @if (clientId) {
      <div class="ad-slot" [class]="'ad-' + format()">
        <span class="ad-label">Ads</span>
        <ins class="adsbygoogle"
          [attr.data-ad-client]="clientId"
          [attr.data-ad-slot]="slot()"
          [attr.data-ad-format]="format() === 'square' ? 'rectangle' : 'auto'"
          data-full-width-responsive="true"
          style="display:block"></ins>
      </div>
    }
  `,
  styles: [
    `
      .ad-slot {
        width: 100%;
        min-height: 90px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        margin: 1.5rem 0;
      }
      .ad-slot.ad-square { min-height: 250px; }
      .ad-label {
        font-size: 0.6875rem;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: hsl(var(--muted-foreground));
        margin-bottom: 0.375rem;
      }
      .adsbygoogle { width: 100%; }
    `
  ]
})
export class AdSlot implements AfterViewInit, OnDestroy {
  readonly format = input<AdSlotFormat>('leaderboard');
  readonly slot = input('0');

  protected readonly clientId = AD_CLIENT_ID;

  private readonly el = inject(ElementRef);
  private timer?: ReturnType<typeof setTimeout>;

  ngAfterViewInit(): void {
    const w = window as any;
    if (!this.clientId || !w.adsbygoogle) return;
    try {
      (w.adsbygoogle = w.adsbygoogle || []).push({});
    } catch {
      /* ad network not ready */
    }
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }
}
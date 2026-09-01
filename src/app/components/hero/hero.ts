import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable, interval, map, startWith } from 'rxjs';

interface Countdown {
  days: string; hours: string; minutes: string; seconds: string;
}

@Component({
  selector: 'app-hero',
  imports: [AsyncPipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private readonly electionDay = new Date('2026-11-03T06:01:00Z');
  private readonly electionDayEnd = new Date('2026-11-04T06:00:00Z');

  readonly isElectionDay = () => {
    const now = Date.now();
    return now >= this.electionDay.getTime() && now < this.electionDayEnd.getTime();
  };

  readonly countdown$: Observable<Countdown> = interval(1000).pipe(
    startWith(0),
    map(() => {
      const diff = this.electionDay.getTime() - Date.now();
      if (diff <= 0) return { days: '0', hours: '00', minutes: '00', seconds: '00' };
      const pad = (n: number) => String(n).padStart(2, '0');
      return {
        days:    String(Math.floor(diff / 86400000)),
        hours:   pad(Math.floor((diff % 86400000) / 3600000)),
        minutes: pad(Math.floor((diff % 3600000) / 60000)),
        seconds: pad(Math.floor((diff % 60000) / 1000)),
      };
    })
  );
}

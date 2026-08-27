import { Component } from '@angular/core';

interface FactItem {
  icon: string;
  label: string;
}

interface PriorityItem {
  text: string;
}

@Component({
  selector: 'app-meet-whitney',
  imports: [],
  templateUrl: './meet-whitney.html',
  styleUrl: './meet-whitney.scss',
})
export class MeetWhitney {
  protected readonly facts: FactItem[] = [
    { icon: '🎓', label: 'Western Hills High School, Class of 2006' },
    { icon: '📘', label: 'University of North Texas — Communication Studies' },
    { icon: '💍', label: 'Married to Sam, mother of one son' },
    { icon: '🏫', label: 'Proud BASIS Benbrook mom' },
  ];

  protected readonly priorities: PriorityItem[] = [
    { text: 'Promote responsible development and conscious spending' },
    { text: 'Ensure every resident feels valued and their voices heard' },
    { text: 'Protect and enhance the quality of life for every citizen' },
  ];
}

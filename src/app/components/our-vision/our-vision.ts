import { Component } from '@angular/core';

interface VisionPillar {
  title: string;
  description: string;
}

@Component({
  selector: 'app-our-vision',
  imports: [],
  templateUrl: './our-vision.html',
  styleUrl: './our-vision.scss',
})
export class OurVision {
  protected readonly pillars: VisionPillar[] = [
    { title: 'Prepared leadership', description: 'doing the work before important votes are taken' },
    { title: 'Clear communication', description: 'explaining decisions in language residents can understand' },
    { title: 'Consistent standards', description: 'treating every neighborhood fairly and respectfully' },
    {
      title: 'Responsible growth',
      description: "planning carefully for safety, services, infrastructure, and Benbrook's future",
    },
    { title: 'Accessible representation', description: 'remaining available and responsive after Election Day' },
    { title: 'Courage to ask questions', description: 'seeking the information needed before reaching conclusions' },
  ];
}

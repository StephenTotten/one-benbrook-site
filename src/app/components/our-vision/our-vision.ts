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
    { title: 'Prepared Leadership', description: 'Doing the work before important votes are taken.' },
    { title: 'Clear Communication', description: 'Explaining decisions in language residents can understand.' },
    { title: 'Consistent Standards', description: 'Treating every neighborhood fairly and respectfully.' },
    {
      title: 'Responsible Growth',
      description: "Planning carefully for safety, services, infrastructure, and Benbrook's future.",
    },
    { title: 'Accessible Representation', description: 'Remaining available and responsive after Election Day.' },
    { title: 'Courage to Ask Questions', description: 'Seeking the information needed before reaching conclusions.' },
  ];
}

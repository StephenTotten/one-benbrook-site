import { Component, signal } from '@angular/core';

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
  totalSlides = 16;
  slides = Array.from({ length: 16 }, (_, i) => `images/slides/slide ${String(i + 1).padStart(2, '0')}.jpg`);
  current = signal(0);

  prev() { this.current.update(i => (i - 1 + this.totalSlides) % this.totalSlides); }
  next() { this.current.update(i => (i + 1) % this.totalSlides); }
  goTo(i: number) { this.current.set(i); }

  pillars: VisionPillar[] = [
    { title: 'Prepared Leadership', description: 'Doing the work before important votes are taken.' },
    { title: 'Clear Communication', description: 'Explaining decisions in language residents can understand.' },
    { title: 'Consistent Standards', description: 'Treating every neighborhood fairly and respectfully.' },
    { title: 'Responsible Growth', description: "Planning carefully for safety, services, infrastructure, and Benbrook's future." },
    { title: 'Accessible Representation', description: 'Remaining available and responsive after Election Day.' },
    { title: 'Courage to Ask Questions', description: 'Seeking the information needed before reaching conclusions.' },
  ];
}

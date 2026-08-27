import { Component, signal } from '@angular/core';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {
  protected readonly isMenuOpen = signal(false);

  protected readonly links: NavLink[] = [
    { label: 'Home', href: '#home' },
    { label: 'Meet Whitney', href: '#meet-whitney' },
    { label: 'Meet Greg', href: '#meet-greg' },
    { label: 'Our Vision', href: '#our-vision' },
  ];

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}

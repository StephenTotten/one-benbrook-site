import { Component, inject, signal } from '@angular/core';
import { ChatService } from '../chat-widget/chat.service';

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
  private chat = inject(ChatService);

  openChat() {
    this.chat.open.set(true);
    this.closeMenu();
  }

  protected readonly links: NavLink[] = [
    { label: 'Home', href: '#' },
    { label: 'Meet Greg', href: '#meet-greg' },
    { label: 'Meet Whitney', href: '#meet-whitney' },
  ];

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}

import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ChatService {
  open = signal(false);
}

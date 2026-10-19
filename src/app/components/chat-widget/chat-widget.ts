import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from './chat.service';

declare const emailjs: any;

@Component({
  selector: 'app-chat-widget',
  imports: [FormsModule],
  templateUrl: './chat-widget.html',
  styleUrl: './chat-widget.scss',
})
export class ChatWidget {
  chat = inject(ChatService);
  submitted = signal(false);
  sending = signal(false);
  name = '';
  email = '';
  question = '';

  toggle() {
    this.chat.open.update(v => !v);
    this.submitted.set(false);
  }

  async submit() {
    this.sending.set(true);
    try {
      await emailjs.send('service_zbayxy9', 'template_qv3rr75', {
        to_email: 's.g.totten@gmail.com',
        subject: 'A Voter Has Asked A Question!',
        name: this.name,
        from_email: this.email,
        message: this.question,
        time: new Date().toLocaleString(),
      });
      this.submitted.set(true);
      this.name = '';
      this.email = '';
      this.question = '';
    } catch {
      alert('Something went wrong. Please try again.');
    }
    this.sending.set(false);
  }
}

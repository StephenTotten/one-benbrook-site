import { Component } from '@angular/core';

interface AboutItem {
  icon: string;
  text: string;
}

@Component({
  selector: 'app-meet-greg',
  imports: [],
  templateUrl: './meet-greg.html',
  styleUrl: './meet-greg.scss',
})
export class MeetGreg {
  protected readonly aboutMe: AboutItem[] = [
    {
      icon: '📍',
      text:
        'Raised in Abilene, Texas, before moving to Fort Worth to work for General Dynamics ' +
        '(now Lockheed Martin). Not long after, Greg made Benbrook his home, and he has now ' +
        'lived here for more than 40 years.',
    },
    { icon: '👨‍👩‍👧‍👧', text: 'Husband, father, and proud grandfather of four granddaughters.' },
    { icon: '💼', text: "Career engineer, currently a Principal Engineer at Lockheed Martin." },
    { icon: '🎣', text: 'Enjoys spending time with family, fishing, camping, and kayaking.' },
    { icon: '🏠', text: "After more than four decades here, Benbrook isn't simply the city where he lives. It's his home." },
  ];

  protected readonly involvement: string[] = [
    'For the past several years, Greg has been very involved in issues surrounding floodplain development and public safety in Benbrook. He’s attended meetings, asked questions, raised concerns, and spoken up when he believed decisions could affect the safety of residents and neighborhoods.',
    'That experience taught him a great deal — not only about development, but about the relationship between residents and their city government.',
    'It reinforced something he believes very strongly: when residents take the time to get involved, ask questions, and raise legitimate concerns, they deserve to know they are being taken seriously.',
    'That experience played an important role in his decision to run for City Council. But he is not running because of one single issue — he’s running because every neighborhood deserves representation and every Benbrook resident deserves leadership they can trust.',
  ];

  protected readonly beliefs: string[] = [
    'Responsible development',
    'Responsible spending',
    'Public safety',
    "Fixing what isn't working",
    'Honesty, integrity, transparency, and accountability',
  ];
}

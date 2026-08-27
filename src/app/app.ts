import { Component } from '@angular/core';
import { NavBar } from './components/nav-bar/nav-bar';
import { Hero } from './components/hero/hero';
import { MeetWhitney } from './components/meet-whitney/meet-whitney';
import { MeetGreg } from './components/meet-greg/meet-greg';
import { OurVision } from './components/our-vision/our-vision';
import { SiteFooter } from './components/site-footer/site-footer';

@Component({
  selector: 'app-root',
  imports: [NavBar, Hero, MeetWhitney, MeetGreg, OurVision, SiteFooter],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}

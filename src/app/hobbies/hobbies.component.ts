import { Component } from '@angular/core';
import { Creation } from '../creation';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent {
  hobbies: Creation[] = [
    {
      title: 'Play Beat Saber',
      description: 'This game is why I am not obese. I am somewhere around the top 300 players in the world. Most of my best scores are on slow levels with extreme note angles.',
      link: 'https://beatleader.com/u/76561198126887823/',
      embedSrc: 'https://www.youtube.com/embed/CdOt-YLdObU?si=uUYQYAESuYh_QDw1'
    },
    {
      title: 'Watching YouTube',
      description: 'I am thankful that Markiplier is the creator I primarily grew up on, as opposed to someone like Mr. Beast. Nowadays, I would say my favorite channel for gaming content is Teo, my favorite for improv comedy is SnapCube, and my favorite for scripted comedy is Something Witty Entertainment. I also watch a few progressive political pundits, but I won\'t say who.'
    },
    {
      title: 'Reading',
      description: 'About 90% of what I read is comics of the "yuri" genre. It is such an improvement over the action/fantasy shows I grew up watching. My favorite authors for traditional series are Yuama and Xian Jun, and Morishima Akiko is very underrated. I have a Discord server where I share grades for everything I\'ve read, but it\'s private for now.'
    },
    {
      title: 'Music',
      description: 'About 90% of what I listen to is video game soundtracks. Outside of that, my favorite genre is breakcore.'
    }
  ];
}

import { Component } from '@angular/core';
import { Creation } from '../creation';
import { CreationComponent } from '../creation/creation.component';

@Component({
    selector: 'app-hobbies',
    templateUrl: './hobbies.component.html',
    styleUrls: ['./hobbies.component.css'],
    imports: [CreationComponent]
})
export class HobbiesComponent {
  hobbies: Creation[] = [
    {
      title: 'Play Beat Saber',
      description: 'This game is my main method for staying fit. I am somewhere around the top 300 players in the world. Most of my best scores are on slow levels with extreme note angles.',
      link: 'https://beatleader.com/u/76561198126887823/',
      embedSrc: 'https://www.youtube.com/embed/CdOt-YLdObU?si=uUYQYAESuYh_QDw1'
    },
    {
      title: 'Play Other Games',
      description: 'Growing up with Terraria was so fun it made most other adventure/RPG games unplayable for me. I can enjoy other genres every once in a while, like Celeste for the platforming, or RPG Maker horror games for the vibes.',
      imageSrc: './assets/Games.png'
    },
    {
      title: 'Watch YouTube',
      description: 'I am eternally thankful that Markiplier is the creator I grew up on. Nowadays, I would say my favorite channels are Teo for gaming content, SnapCube for improv comedy, and Something Witty Entertainment for scripted comedy. I also watch a variety of progressive political pundits.',
      imageSrc: './assets/YT_Channels.png'
    },
    {
      title: 'Read',
      description: 'As a kid, I read some of the classic series, like the Chronicles of Narnia, the Time Quintet, and Calvin & Hobbes. Nowadays, I have found comics that I enjoy much more than the action/fantasy stuff I grew up with. My favorite authors for traditional series are Yuama and Xian Jun, and Morishima Akiko is very underrated. I have a Discord server where I share grades for everything I\'ve read, but it\'s private for now.',
      imageSrc: './assets/Reading.png'
    },
    {
      title: 'Music',
      description: 'About 90% of what I listen to is video game soundtracks. Outside of that, my favorite genre is breakcore. I use the Moondrop Blessing 3 along with an old Schiit stack (yes that is their name). I also EQ and crossfeed my headphones to get the most accurate sound possible.',
      imageSrc: './assets/Music.png'
    }
  ];
}

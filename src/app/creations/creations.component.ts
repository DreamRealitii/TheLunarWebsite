import { Component } from '@angular/core';
import { Creation } from '../creation';

@Component({
  selector: 'app-creations',
  templateUrl: './creations.component.html',
  styleUrls: ['./creations.component.css']
})
export class CreationsComponent {
  creations: Creation[] = [
    {
      title: 'A Smart Music Recommender',
      description: 'A work-in-progress freemium cloud app that compares and recommends songs based on objective sound data instead of artist, genre, or user activity. Currently developing using .NET Aspire.',
      link: 'https://docs.google.com/document/d/1y3B88Gyh9hmKGk-Ntyka1RM_WMpR4c9phLWGx6TTuTE/edit?usp=sharing',
      imageSrc: '/assets/ASMR.png'
    },
    {
      title: 'Chess Visualized',
      description: 'My own Chess game that displays every move each piece can make, and what effects they have on the game. Developed from scratch using .NET MAUI.',
      link: 'https://store.steampowered.com/app/3513790/Chess_Visualized/',
      imageSrc: '/assets/CV.png'
    },
    {
      title: 'This Website',
      description: 'A simple website I made in Angular to share myself and prove I can also do front-end development.',
      link: '/',
      imageSrc: '/assets/Website.png'
    },
    {
      title: 'Beat Saber Levels',
      description: 'Custom levels made for the VR game Beat Saber, which have been played by thousands of people. Some levels are also "curated" by BeatSaver staff and "ranked" by the ScoreSaber/BeatLeader teams.',
      link: 'https://beatsaver.com/profile/1600',
      imageSrc: '/assets/BS_Levels.png'
    },
    {
      title: 'Beat Saber Mods',
      description: 'I made a couple mods in C# for Beat Saber: One called Bad Cut Type for the game itself, and more recently one called BPM Helper for a level editor.',
      link: 'https://github.com/DreamRealitii/ChroMapper-BPMHelper',
      imageSrc: '/assets/BPM.png'
    },
    {
      title: 'YouTube Channel',
      description: 'As a teenager, I tried going the route of the gaming YouTuber. Although it never turned into a source of money or clout, what I made back then was still decently entertaining and helped me learn to edit.',
      link: 'https://www.youtube.com/@DreamRealitii',
      imageSrc: '/assets/YT.png'
    }
  ];
}

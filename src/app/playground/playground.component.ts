import { Component } from '@angular/core';
import { PlaygroundService } from '../playground.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent {
  name: string = "Pikachu";
  moves: number = 0;

  constructor(private playgroundService: PlaygroundService) {
    this.setMoves = this.setMoves.bind(this);
  }

  getMoves(): void {
    this.playgroundService.getMoves(this.name, this.setMoves);
  }

  setMoves(num: number): void {
    this.moves = num;
  }
}

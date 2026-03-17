import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlaygroundService } from '../playground.service';

@Component({
    selector: 'app-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.css'],
    imports: [FormsModule]
})
export class PlaygroundComponent implements AfterViewInit {
  discordUsername: string = "@thelunarcarver";
  pokemonName: string = "Pikachu";
  pokemonMoves: number = 0;
  
  constructor(private playgroundService: PlaygroundService) {
    this.setMoves = this.setMoves.bind(this);
  }

  ngAfterViewInit(): void {
    this.playgroundService.googleInit();
  }

  handleDiscordClick(): void {
    navigator.clipboard.writeText(this.discordUsername);
  }

  handleReset(): void {
    this.playgroundService.handleReset();
  }

  getMoves(): void {
    this.playgroundService.getMoves(this.pokemonName, this.setMoves);
  }

  setMoves(num: number): void {
    this.pokemonMoves = num;
  }
}

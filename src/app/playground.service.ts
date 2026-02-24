import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaygroundService {
  constructor(private http: HttpClient) { }

  getMoves(name: string, callback: (num: number) => void): void {
    this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}`).subscribe(
      {
        next: (response) => callback(response.moves.length),
        error: () => callback(-1)
      }
    );
  }
}

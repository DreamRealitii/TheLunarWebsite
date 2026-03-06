import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IconService } from './icon.service';

// Sign-in method from https://github.com/ShemiNechmad/GoogleSignInAngular
declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class PlaygroundService {
  readonly iconKey: string = "icon"
  readonly pokeURL: string = "https://pokeapi.co/api/v2/pokemon/";
  readonly googleClientId: string = "1037291654635-a4ebbanlttc4nic9trc5912rjs9fhg9h.apps.googleusercontent.com";
  
  constructor(private http: HttpClient, private iconService: IconService) { }

  googleInit(): void {
    google.accounts.id.initialize({
      client_id: this.googleClientId,
      callback: (response: any) => this.handleGoogleSignIn(response)
    });
    google.accounts.id.renderButton(
      document.getElementById("button"),
      { size: "large", type: "icon", shape: "pill" }  // customization attributes
    );
  }

  getMoves(name: string, setMovesCallback: (num: number) => void): void {
    this.http.get<any>(`${this.pokeURL}${name}`).subscribe(
      {
        next: (response) => setMovesCallback(response.moves.length),
        error: (err) => setMovesCallback(-1)
      }
    );
  }

  handleGoogleSignIn(response: any): void {
    let base64Url = response.credential.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    let parsedResponse : any = JSON.parse(jsonPayload);
    this.iconService.updateIcon(parsedResponse.picture);
    localStorage.setItem(this.iconKey, parsedResponse.picture);
  }

  handleReset(): void {
    this.iconService.resetIcon();
    localStorage.removeItem(this.iconKey);
  }
}

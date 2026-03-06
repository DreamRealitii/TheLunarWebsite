import { AfterViewInit, Component } from '@angular/core';
import { PlaygroundService } from '../playground.service';
import { IconService } from '../icon.service';

// Sign-in method from https://github.com/ShemiNechmad/GoogleSignInAngular
declare var google: any;

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements AfterViewInit {
  name: string = "Pikachu";
  moves: number = 0;
  readonly CLIENT_ID: string = "1037291654635-a4ebbanlttc4nic9trc5912rjs9fhg9h.apps.googleusercontent.com";
  readonly DISCOVERY_DOC: string = "https://admin.googleapis.com/$discovery/rest?version=v1";
  readonly SCOPES: string[] = ["https://www.googleapis.com/auth/admin.directory.user.readonly"];

  constructor(private playgroundService: PlaygroundService, private iconService: IconService) {
    this.setMoves = this.setMoves.bind(this);
  }

  ngAfterViewInit(): void {
    google.accounts.id.initialize({
      client_id: this.CLIENT_ID,
      callback: (response: any) => this.handleGoogleSignIn(response)
    });
    google.accounts.id.renderButton(
      document.getElementById("button"),
      { size: "large", type: "icon", shape: "pill" }  // customization attributes
    );
  }

  handleGoogleSignIn(response: any): void {

    // This next is for decoding the idToken to an object if you want to see the details.
    let base64Url = response.credential.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    let parsedResponse : any = JSON.parse(jsonPayload);
    this.iconService.updateIcon(parsedResponse.picture);
    localStorage.setItem("icon", parsedResponse.picture);
  }

  handleReset(): void {
    this.iconService.resetIcon();
    localStorage.removeItem("icon");
  }

  getMoves(): void {
    this.playgroundService.getMoves(this.name, this.setMoves);
  }

  setMoves(num: number): void {
    this.moves = num;
  }
}

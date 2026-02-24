import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('image') image : ElementRef | undefined;
  rotation: number = 0;

  onMouseMove(pe: PointerEvent): void {
    this.rotation = pe.offsetX;
    console.log(`Mouse moved to ${pe.offsetX}, ${pe.offsetY}`);
  }
}

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
    const element: HTMLElement = this.image?.nativeElement;
    const rect: DOMRect = element.getBoundingClientRect();
    const centerX: number = rect.left + (rect.width / 2);
    const centerY: number = rect.top + (rect.height / 2);
    const diffX: number = pe.clientX - centerX;
    const diffY: number = pe.clientY - centerY;
    this.rotation = Math.atan2(diffY, diffX);
  }
}

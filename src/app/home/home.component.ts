import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('image') image : ElementRef | undefined;
  currentRotation: number = 0;
  correctRotation: number = 0;

  ngOnInit(): void {
    setInterval(() => {
      let moveTowards: number = this.correctRotation;
      if (moveTowards - this.currentRotation >= Math.PI)
        moveTowards -= Math.PI * 2;
      if (this.currentRotation - moveTowards >= Math.PI)
        moveTowards += Math.PI * 2;
      this.currentRotation = ((this.currentRotation * 0.95) + (moveTowards * 0.05)) % (Math.PI * 2)
    }, 10);
  }

  onMouseMove(pe: PointerEvent): void {
    const element: HTMLElement = this.image?.nativeElement;
    const rect: DOMRect = element.getBoundingClientRect();
    const centerX: number = rect.left + (rect.width / 2);
    const centerY: number = rect.top + (rect.height / 2);
    const diffX: number = pe.clientX - centerX;
    const diffY: number = pe.clientY - centerY;
    this.correctRotation = Math.atan2(diffY, diffX);
  }
}

import { Component, input, OnInit } from '@angular/core';
import { IconService } from '../icon.service';

@Component({
    selector: 'app-icon',
    imports: [],
    templateUrl: './icon.component.html',
    styleUrl: './icon.component.css'
})
export class IconComponent implements OnInit {
  readonly defaultSrc: string = "./assets/Eyecon_small.png";
  imageSrc: string = this.defaultSrc;

  constructor(private iconService: IconService) {
    this.setImage = this.setImage.bind(this);
    this.resetImage = this.resetImage.bind(this);
    iconService.setUpdate(this.setImage);
    iconService.setReset(this.resetImage);
  }

  ngOnInit(): void {
    const savedImage: string | null = localStorage.getItem("icon");
    if (savedImage)
      this.setImage(savedImage);
  }

  setImage(src: string): void {
    this.imageSrc = src;
  }

  resetImage(): void {
    this.imageSrc = this.defaultSrc;
  }
}

import { Component, input, OnInit } from '@angular/core';
import { IconService } from '../icon.service';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent implements OnInit {
  imageSrc: string = "./assets/Eyecon_small.png";

  constructor(private iconService: IconService) {
    this.setImage = this.setImage.bind(this);
    iconService.setCallback(this.setImage);
  }

  ngOnInit(): void {
    const savedImage: string | null = localStorage.getItem("icon");
    if (savedImage)
      this.setImage(savedImage);
  }

  setImage(src: string): void {
    this.imageSrc = src;
  }
}

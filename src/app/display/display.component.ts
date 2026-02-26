import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
// Displays either an image or an embed
export class DisplayComponent implements OnInit {
  @Input() imageSrcIn?: string;
  @Input() imageAltIn?: string;
  @Input() embedSrcIn?: string;
  imageSrc?: string;
  imageAlt?: string;
  embedSrc?: string;
  constructor(private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    if (this.imageSrcIn)
      this.imageSrc = this.sanitizer.sanitize(SecurityContext.URL,
        this.sanitizer.bypassSecurityTrustUrl(this.imageSrcIn))!;
    if (this.imageAltIn)
      this.imageAlt = this.sanitizer.sanitize(SecurityContext.HTML, this.imageAltIn)!;
    if (this.embedSrcIn)
      this.embedSrc = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL,
        this.sanitizer.bypassSecurityTrustResourceUrl(this.embedSrcIn))!;
  }
}

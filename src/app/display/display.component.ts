import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.css'],
    standalone: false
})
// Displays either an image or an embed
export class DisplayComponent implements OnInit {
  @Input() imageSrcIn?: string;
  @Input() imageAltIn?: string;
  @Input() embedSrcIn?: string;
  imageSrc?: SafeUrl;
  imageAlt?: string;
  embedSrc?: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    if (this.imageSrcIn)
      this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(this.imageSrcIn);
    if (this.imageAltIn)
      this.imageAlt = this.sanitizer.sanitize(SecurityContext.HTML, this.imageAltIn)!;
    if (this.embedSrcIn)
      this.embedSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.embedSrcIn);
  }
}

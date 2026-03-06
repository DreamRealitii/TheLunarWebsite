import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  updateIcon(str: string): void {}

  setCallback(callback: (str: string) => void): void {
    this.updateIcon = callback;
  }
}

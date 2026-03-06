import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  updateIcon(str: string): void {}

  resetIcon(): void {}

  setUpdate(callback: (str: string) => void): void {
    this.updateIcon = callback;
  }

  setReset(callback: () => void): void {
    this.resetIcon = callback;
  }
}

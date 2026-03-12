import { Component, Input } from '@angular/core';
import { Creation } from '../creation';

@Component({
    selector: 'app-creation',
    templateUrl: './creation.component.html',
    styleUrls: ['./creation.component.css'],
    standalone: false
})
export class CreationComponent {
  @Input() creation: Creation | undefined;
}

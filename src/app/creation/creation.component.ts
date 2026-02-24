import { Component, Input } from '@angular/core';
import { Creation } from '../creation';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent {
  @Input() creation: Creation | undefined;
}

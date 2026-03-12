import { Component, Input } from '@angular/core';
import { Creation } from '../creation';
import { DisplayComponent } from '../display/display.component';

@Component({
    selector: 'app-creation',
    templateUrl: './creation.component.html',
    styleUrls: ['./creation.component.css'],
    imports: [DisplayComponent]
})
export class CreationComponent {
  @Input() creation: Creation | undefined;
}

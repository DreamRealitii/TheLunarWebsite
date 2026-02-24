import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationsComponent } from './creations.component';

describe('CreationsComponent', () => {
  let component: CreationsComponent;
  let fixture: ComponentFixture<CreationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreationsComponent]
    });
    fixture = TestBed.createComponent(CreationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

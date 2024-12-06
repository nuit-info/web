import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainOfPictogramsComponent } from './rain-of-pictograms.component';

describe('RainOfPictogramsComponent', () => {
  let component: RainOfPictogramsComponent;
  let fixture: ComponentFixture<RainOfPictogramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RainOfPictogramsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RainOfPictogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

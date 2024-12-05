import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarMeteoComponent } from './side-bar-meteo.component';

describe('SideBarMeteoComponent', () => {
  let component: SideBarMeteoComponent;
  let fixture: ComponentFixture<SideBarMeteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarMeteoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideBarMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

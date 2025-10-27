import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Geofencing } from './geofencing';

describe('Geofencing', () => {
  let component: Geofencing;
  let fixture: ComponentFixture<Geofencing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Geofencing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Geofencing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

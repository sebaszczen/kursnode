import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDescriptionHeaderComponent } from './weather-description-header.component';

describe('WeatherDescriptionHeaderComponent', () => {
  let component: WeatherDescriptionHeaderComponent;
  let fixture: ComponentFixture<WeatherDescriptionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDescriptionHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDescriptionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

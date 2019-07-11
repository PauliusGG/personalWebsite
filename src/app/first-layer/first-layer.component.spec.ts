import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLayerComponent } from './first-layer.component';

describe('FirstLayerComponent', () => {
  let component: FirstLayerComponent;
  let fixture: ComponentFixture<FirstLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

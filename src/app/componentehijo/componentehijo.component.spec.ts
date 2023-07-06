import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentehijoComponent } from './componentehijo.component';

describe('ComponentehijoComponent', () => {
  let component: ComponentehijoComponent;
  let fixture: ComponentFixture<ComponentehijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentehijoComponent]
    });
    fixture = TestBed.createComponent(ComponentehijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

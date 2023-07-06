import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombociudadesComponent } from './combociudades.component';

describe('CombociudadesComponent', () => {
  let component: CombociudadesComponent;
  let fixture: ComponentFixture<CombociudadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CombociudadesComponent]
    });
    fixture = TestBed.createComponent(CombociudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

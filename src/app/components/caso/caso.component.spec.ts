import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasoComponent } from './caso.component';

describe('CasoComponent', () => {
  let component: CasoComponent;
  let fixture: ComponentFixture<CasoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasoComponent]
    });
    fixture = TestBed.createComponent(CasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

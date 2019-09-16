import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularzCompComponent } from './formularz-comp.component';

describe('FormularzCompComponent', () => {
  let component: FormularzCompComponent;
  let fixture: ComponentFixture<FormularzCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularzCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularzCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

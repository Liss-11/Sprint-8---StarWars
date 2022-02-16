import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetesComponent } from './targetes.component';

describe('TargetesComponent', () => {
  let component: TargetesComponent;
  let fixture: ComponentFixture<TargetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

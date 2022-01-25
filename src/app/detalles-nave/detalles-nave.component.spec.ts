import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesNaveComponent } from './detalles-nave.component';

describe('DetallesNaveComponent', () => {
  let component: DetallesNaveComponent;
  let fixture: ComponentFixture<DetallesNaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesNaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesNaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

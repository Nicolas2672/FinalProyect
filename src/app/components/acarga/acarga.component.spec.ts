import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcargaComponent } from './acarga.component';

describe('AcargaComponent', () => {
  let component: AcargaComponent;
  let fixture: ComponentFixture<AcargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcargaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

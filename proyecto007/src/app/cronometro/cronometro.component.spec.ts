import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronometroComponent } from './cronometro.component';

describe('CronometroComponent', () => {
  let component: CronometroComponent;
  let fixture: ComponentFixture<CronometroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronometroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CronometroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

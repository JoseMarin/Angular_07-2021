import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoarticulosComponent } from './listadoarticulos.component';

describe('ListadoarticulosComponent', () => {
  let component: ListadoarticulosComponent;
  let fixture: ComponentFixture<ListadoarticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoarticulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoarticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

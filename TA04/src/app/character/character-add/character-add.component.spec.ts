import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterAddComponent } from './character-add.component';

describe('CharacterAddComponent', () => {
  let component: CharacterAddComponent;
  let fixture: ComponentFixture<CharacterAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

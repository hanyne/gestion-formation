import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFormateurComponent } from './modifier-formateur.component';

describe('ModifierFormateurComponent', () => {
  let component: ModifierFormateurComponent;
  let fixture: ComponentFixture<ModifierFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierFormateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

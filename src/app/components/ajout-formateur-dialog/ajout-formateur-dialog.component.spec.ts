import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFormateurDialogComponent } from './ajout-formateur-dialog.component';

describe('AjoutFormateurDialogComponent', () => {
  let component: AjoutFormateurDialogComponent;
  let fixture: ComponentFixture<AjoutFormateurDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutFormateurDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutFormateurDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

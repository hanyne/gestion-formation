import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCyclesFormationComponent } from './gestion-cycles-formation.component';

describe('GestionCyclesFormationComponent', () => {
  let component: GestionCyclesFormationComponent;
  let fixture: ComponentFixture<GestionCyclesFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCyclesFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionCyclesFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

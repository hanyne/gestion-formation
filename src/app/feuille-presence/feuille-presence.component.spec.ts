import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeuillePresenceComponent } from './feuille-presence.component';

describe('FeuillePresenceComponent', () => {
  let component: FeuillePresenceComponent;
  let fixture: ComponentFixture<FeuillePresenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeuillePresenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeuillePresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

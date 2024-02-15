import { TestBed } from '@angular/core/testing';

import { FeuillePresenceService } from './feuille-presence.service';

describe('FeuillePresenceService', () => {
  let service: FeuillePresenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeuillePresenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

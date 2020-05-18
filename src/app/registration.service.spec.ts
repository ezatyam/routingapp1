import { TestBed } from '@angular/core/testing';

import { RegistratiionService } from './registratiion.service';

describe('RegistratiionService', () => {
  let service: RegistratiionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistratiionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

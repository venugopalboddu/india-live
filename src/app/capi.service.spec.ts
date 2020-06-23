import { TestBed } from '@angular/core/testing';

import { CapiService } from './capi.service';

describe('CapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapiService = TestBed.get(CapiService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PipeServiceService } from './pipe-service.service';

describe('PipeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PipeServiceService = TestBed.get(PipeServiceService);
    expect(service).toBeTruthy();
  });
});

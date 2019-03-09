import { TestBed } from '@angular/core/testing';

import { UpdateServicesService } from './update-services.service';

describe('UpdateServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateServicesService = TestBed.get(UpdateServicesService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AlertmessageService } from './alertmessage.service';

describe('AlertmessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertmessageService = TestBed.get(AlertmessageService);
    expect(service).toBeTruthy();
  });
});

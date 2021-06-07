import { TestBed } from '@angular/core/testing';

import { MockSpyService } from './mock-spy.service';

describe('MockSpyService', () => {
  let service: MockSpyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockSpyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

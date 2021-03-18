import { TestBed } from '@angular/core/testing';

import { HeadStateService } from './head-state.service';

describe('HeadStateService', () => {
  let service: HeadStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

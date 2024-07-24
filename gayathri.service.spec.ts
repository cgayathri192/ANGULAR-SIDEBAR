import { TestBed } from '@angular/core/testing';

import { GayathriService } from './gayathri.service';

describe('GayathriService', () => {
  let service: GayathriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GayathriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

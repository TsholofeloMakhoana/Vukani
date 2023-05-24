import { TestBed } from '@angular/core/testing';

import { CrudStatusService } from './crud-status.service';

describe('CrudStatusService', () => {
  let service: CrudStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

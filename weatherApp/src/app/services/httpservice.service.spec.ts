import { TestBed } from '@angular/core/testing';

import { HttpserviceService } from './dataprovider.service';

describe('HttpserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpserviceService = TestBed.get(HttpserviceService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PlatilloCRUDService } from './platillo-crud.service';

describe('PlatilloCRUDService', () => {
  let service: PlatilloCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatilloCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MesaCRUDService } from './mesa-crud.service';

describe('MesaCRUDService', () => {
  let service: MesaCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesaCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

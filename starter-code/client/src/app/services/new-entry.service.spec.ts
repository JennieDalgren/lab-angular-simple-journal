import { TestBed, inject } from '@angular/core/testing';

import { NewEntryService } from './new-entry.service';

describe('NewEntryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewEntryService]
    });
  });

  it('should be created', inject([NewEntryService], (service: NewEntryService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MockStoreService } from './mock-store.service';

describe('MockStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockStoreService]
    });
  });

  it('should ...', inject([MockStoreService], (service: MockStoreService) => {
    expect(service).toBeTruthy();
  }));
});

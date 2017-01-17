/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResourceSettingsService } from './resource-settings.service';

describe('ResourceSettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResourceSettingsService]
    });
  });

  it('should ...', inject([ResourceSettingsService], (service: ResourceSettingsService) => {
    expect(service).toBeTruthy();
  }));
});

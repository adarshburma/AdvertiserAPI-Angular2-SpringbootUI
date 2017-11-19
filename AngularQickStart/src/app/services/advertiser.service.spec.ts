import { TestBed, inject } from '@angular/core/testing';

import { AdvertiserService } from './advertiser.service';

describe('AdvertiserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvertiserService]
    });
  });

  it('should be created', inject([AdvertiserService], (service: AdvertiserService) => {
    expect(service).toBeTruthy();
  }));
});

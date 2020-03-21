import { TestBed } from '@angular/core/testing';

import { OverviewProviderService } from './overview-provider.service';

describe('OverviewProviderService', () => {
  let service: OverviewProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverviewProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

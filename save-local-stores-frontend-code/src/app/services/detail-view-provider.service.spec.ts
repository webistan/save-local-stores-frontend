import { TestBed } from '@angular/core/testing';

import { DetailViewProviderService } from './detail-view-provider.service';

describe('DetailViewProviderService', () => {
  let service: DetailViewProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailViewProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

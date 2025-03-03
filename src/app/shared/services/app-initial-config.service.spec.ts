import { TestBed } from '@angular/core/testing';

import { AppInitialConfigService } from './app-initial-config.service';

describe('AppInitialConfigService', () => {
  let service: AppInitialConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppInitialConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

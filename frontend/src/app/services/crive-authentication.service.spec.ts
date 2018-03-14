import { TestBed, inject } from '@angular/core/testing';

import { CriveAuthenticationService } from './crive-authentication.service';

describe('CriveAuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CriveAuthenticationService]
    });
  });

  it('should be created', inject([CriveAuthenticationService], (service: CriveAuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});

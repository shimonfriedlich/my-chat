import { TestBed, inject } from '@angular/core/testing';

import { MsgsControllerService } from './msgs-controller.service';

describe('MsgsControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MsgsControllerService]
    });
  });

  it('should be created', inject([MsgsControllerService], (service: MsgsControllerService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Events.serviceService } from './Events.service';

describe('Service: Events.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Events.serviceService]
    });
  });

  it('should ...', inject([Events.serviceService], (service: Events.serviceService) => {
    expect(service).toBeTruthy();
  }));
});

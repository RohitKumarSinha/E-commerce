import { TestBed } from '@angular/core/testing';

import { dataService } from './data.service';

describe('Product.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Product.ServiceService = TestBed.get(Product.ServiceService);
    expect(service).toBeTruthy();
  });
});

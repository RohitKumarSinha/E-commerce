import { TestBed } from '@angular/core/testing';

import { OrderManagementServiceService } from './order-management-service.service';

describe('OrderManagementServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderManagementServiceService = TestBed.get(OrderManagementServiceService);
    expect(service).toBeTruthy();
  });
});

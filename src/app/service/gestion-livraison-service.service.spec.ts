import { TestBed } from '@angular/core/testing';

import { GestionLivraisonServiceService } from './gestion-livraison-service.service';

describe('GestionLivraisonServiceService', () => {
  let service: GestionLivraisonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionLivraisonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

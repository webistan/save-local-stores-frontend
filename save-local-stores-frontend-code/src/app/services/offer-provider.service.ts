import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Offer } from '../model/offer';
import { OFFERS } from '../model/mock-offers';

@Injectable({
  providedIn: 'root'
})
export class OfferProviderService {
  offers(): Observable<Offer[]> {
    return of(OFFERS)
  }

  constructor() {
  }
}

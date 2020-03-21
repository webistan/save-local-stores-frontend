import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { Offer } from '../model/offer';
import { OFFERS } from '../model/mock-offers';

@Injectable({
  providedIn: 'root'
})
export class OfferProviderService {
  offers(): Observable<Offer[]> {
    return of(OFFERS)
  }

  offer(id: string): Observable<Offer> {
    return this.offers().pipe(
      map(offers => offers.find(offer => offer.id == id)),
      filter(offer => offer != undefined)
    )
  }

  constructor() {
  }
}

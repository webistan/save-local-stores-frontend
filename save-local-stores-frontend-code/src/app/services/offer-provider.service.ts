import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { Offer } from '../model/offer';
import { OFFERS } from '../model/mock-offers';

@Injectable({
  providedIn: 'root'
})
export class OfferProviderService {
  constructor() {}

  offers(cityID: string): Observable<Offer[]> {
    return of(OFFERS).pipe(
      map(offers => offers.filter(offer => offer.cityID == cityID))
    )
  }

  offer(cityID: string, offerID: string): Observable<Offer> {
    return this.offers(cityID).pipe(
      map(offers => offers.find(offer => offer.id == offerID)),
      filter(offer => offer != undefined)
    )
  }
}

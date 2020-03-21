import { Injectable } from '@angular/core';
import { Offer } from '../model/offer';
import { OFFERS } from '../model/mock-offers';

@Injectable({
  providedIn: 'root'
})
export class OfferProviderService {
  offers: Offer[]

  constructor() {
    this.offers = OFFERS
  }
}

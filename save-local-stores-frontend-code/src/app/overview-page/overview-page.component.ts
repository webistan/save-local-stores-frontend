import { Component, OnInit } from '@angular/core';

import { Offer } from '../model/offer';
import { OfferProviderService } from '../services/offer-provider.service'

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})

export class OverviewPageComponent implements OnInit {
  offers: Offer[]

  constructor(private offerProvider: OfferProviderService) { }

  ngOnInit(): void {
    this.offerProvider.offers()
      .subscribe(offers => this.offers = offers);
  }
}

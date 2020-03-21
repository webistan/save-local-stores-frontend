import { Component, OnInit } from '@angular/core';
import { OfferProviderService } from '../services/offer-provider.service'
import { Offer } from '../model/offer';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})

export class OverviewPageComponent implements OnInit {
  offers: Offer[]

  constructor(private offerProvider: OfferProviderService) { }

  ngOnInit(): void {
    this.offers = this.offerProvider.offers
  }
}

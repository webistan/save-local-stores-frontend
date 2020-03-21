import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { Offer } from '../model/offer';
import { CITY_ROUTE_DESCRIPTOR, OFFER_ROUTE_DESCRIPTOR } from '../model/route-descriptors';
import { OfferProviderService } from '../services/offer-provider.service'

@Component({
  selector: 'app-detail-view-page',
  templateUrl: './detail-view-page.component.html',
  styleUrls: ['./detail-view-page.component.css']
})
export class DetailViewPageComponent implements OnInit {
  offer: Offer

  constructor(
    private route: ActivatedRoute,
    private offerProvider: OfferProviderService
  ) {
  }

  ngOnInit(): void {
    let cityID = this.route.snapshot.paramMap.get(CITY_ROUTE_DESCRIPTOR);
    let offerID = this.route.snapshot.paramMap.get(OFFER_ROUTE_DESCRIPTOR);
    this.offerProvider.offer(cityID, offerID)
      .subscribe(offer => this.offer = offer);
  }
}

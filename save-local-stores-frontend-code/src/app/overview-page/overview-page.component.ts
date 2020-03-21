import { Component, OnInit } from '@angular/core';
import { Offer } from './offer';
import { OFFERS } from './mock-offers';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})

export class OverviewPageComponent implements OnInit {
  offers: Offer[]

  constructor() { }

  ngOnInit(): void {
    this.offers = OFFERS
  }
}

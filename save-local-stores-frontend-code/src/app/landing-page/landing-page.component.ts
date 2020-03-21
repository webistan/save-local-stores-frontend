import { Component, OnInit } from '@angular/core';

import { City } from '../model/city';
import { CITY_ROUTE_DESCRIPTOR } from '../model/route-descriptors';
import { CityProviderService } from '../services/city-provider.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  cityRoutePrefix: string
  cities: City[]

  constructor(
    private cityProvider: CityProviderService
  ) {
    this.cityRoutePrefix = CITY_ROUTE_DESCRIPTOR + '='
  }

  ngOnInit(): void {
    this.cityProvider.cities()
      .subscribe(cities => this.cities = cities)
  }
}

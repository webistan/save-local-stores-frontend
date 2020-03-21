import { Component, OnInit } from '@angular/core';

import { City } from '../model/city';
import { APP_NAME } from '../model/global';
import { CityProviderService } from '../services/city-provider.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  appTitle: string
  cities: City[]

  constructor(
    private cityProvider: CityProviderService
  ) {
    this.appTitle = APP_NAME
  }

  ngOnInit(): void {
    this.cityProvider.cities()
      .subscribe(cities => this.cities = cities)
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { City } from '../model/city';
import { CITIES } from '../model/mock-cities';

@Injectable({
  providedIn: 'root'
})
export class CityProviderService {
  constructor() { }

  cities(): Observable<City[]> {
    return of(CITIES)
  }
}

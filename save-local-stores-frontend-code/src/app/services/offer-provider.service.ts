import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { filter, map, catchError } from 'rxjs/operators';

import { CITIES_SUBPATH, SHOPS_SUBPATH, PATH_SEPARATOR } from '../model/global';
import { Offer } from '../model/offer';
import { environment } from 'src/environments/environment';

function offerFromEntry(entry: Object): Offer {
  return {
    businessCategory: entry['business_categorie_id'],
    description: entry['description'],
    id: entry['id'],
    businessName: entry['name'],
    ownerName: entry['owner_firstname'] + ' ' + entry['owner_lastname'],
    ownerPictureURL: entry['owner_picture'],
    pictureURLs: [entry['picture']],
    streetAndNumber: entry['street'] + ' ' + entry['street_number'],
    zipCodeAndCity: entry['zip_code'] + ' ' + entry['telephone'],
    quote: entry['quote']
  }
}

@Injectable({
  providedIn: 'root'
})
export class OfferProviderService {
  constructor(
    private http: HttpClient
  ) {
  }

  offers(cityID: string): Observable<Offer[]> {
    let queryURL = environment.backendIPSubpath + PATH_SEPARATOR + CITIES_SUBPATH + PATH_SEPARATOR + SHOPS_SUBPATH + PATH_SEPARATOR + cityID;
    return this.http.get(queryURL).pipe(
      catchError(this.handleError),
      map(function (data: Object): Offer[] {
        let results = data['results']
        var entries: Offer[] = []
        results.forEach(entry => {
          entries.push(offerFromEntry(entry))
        });
        return entries
      })
    )
  }

  offer(offerID: string): Observable<Offer> {
    let queryURL = environment.backendIPSubpath + PATH_SEPARATOR + SHOPS_SUBPATH + PATH_SEPARATOR + offerID;
    return this.http.get(queryURL).pipe(
      catchError(this.handleError),
      map(function (data: Object): Offer {
        return offerFromEntry(data['results'][0])
      })
    )
  }

  private handleError(error: HttpErrorResponse) {
    return error.error instanceof ErrorEvent ?
      throwError('Client error:' + error.error.message) :
      throwError(`Backend error: ${error.status}; body: ${error.error}`)
  };
}

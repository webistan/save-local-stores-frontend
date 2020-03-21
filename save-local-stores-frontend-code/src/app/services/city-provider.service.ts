import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { City } from '../model/city';
import { CITIES } from '../model/mock-cities';

@Injectable({
  providedIn: 'root'
})
export class CityProviderService {
  constructor(
    private http: HttpClient
  ) {
  }

  cities(): Observable<City[]> {
    let configUrl = '78.47.161.61';
    let token = '1236F#fR@jaqUX5v$lCFTaMD7ub$P0i52GVSW#xwaRhUZR$UDiU2cL#ABAByC2j3BdIgW9TLksqvZPQs1Xk9uNkcEL@oLbBot&'
    return of(CITIES)
    return this.http.get(configUrl, { headers: {'x-access-token': token} }).pipe(
      catchError(this.handleError),
      map(function (data: Object): City[] {
        let result = data['message']
        return [
          { id: '56bc4f17-b290-4e71-960e-747531c0c8fe', name: 'Berlin', numberOfOffers: 87 }
        ]
      })
    )
  }

  private handleError(error: HttpErrorResponse) {
    return error.error instanceof ErrorEvent ?
      throwError('Client error:' + error.error.message) :
      throwError(`Backend error: ${error.status}; body: ${error.error}`)
  };
}

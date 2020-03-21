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
    let configUrl = '78.47.161.61/cities';
    return this.http.get(configUrl).pipe(
      catchError(this.handleError),
      map(function (data: Object): City[] {
        let results = data['results']
        var entries: City[] = []
        results.forEach(entry => {
          entries.push({ id: entry['id'], name: entry['name'], pictureURL: entry['picture'] })
        });
        return entries
      })
    )
  }

  private handleError(error: HttpErrorResponse) {
    return error.error instanceof ErrorEvent ?
      throwError('Client error:' + error.error.message) :
      throwError(`Backend error: ${error.status}; body: ${error.error}`)
  };
}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { City } from '../model/city';
import { CITIES_SUBPATH, PATH_SEPARATOR } from '../model/global';
import { CITIES } from '../model/mock-cities';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityProviderService {
  constructor(
    private http: HttpClient
  ) {
  }

  cities(): Observable<City[]> {
    let configUrl = environment.backendIPSubpath + PATH_SEPARATOR + CITIES_SUBPATH;
    return environment.useMocks ? 
      of(CITIES) :
      this.http.get(configUrl).pipe(
        catchError(this.handleError),
        map(function (data: Object): City[] {
          let results = data['results']
          var entries: City[] = []
          results.forEach(entry => {
            entries.push({ id: entry['id'], name: entry['name'], pictureURL: 'https://images.unsplash.com/photo-1568652699190-ba5f79983c8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60' })//entry['picture'] })
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

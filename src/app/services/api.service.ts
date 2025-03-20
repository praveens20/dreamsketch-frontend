import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get<I>(endpoint: string, options = {}): Observable<I> {
    // options['withCredentials'] = true;
    // options['crossDomain'] = true;
    return this.http.get<I>(endpoint, options).pipe(
      catchError((error) => {
        console.error(error);
        return of(error);
      })
    );
  }

  post<I>(endpoint: string, body: any, options = {}): Observable<I> {
    // options['withCredentials'] = true;
    // options['crossDomain'] = true;
    return this.http.post<I>(endpoint, body, options).pipe(
      catchError((error) => {
        console.error(error);
        return of(error);
      })
    );
  }
}

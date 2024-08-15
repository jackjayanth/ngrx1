import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { interval, map, mergeMap, Observable, take } from 'rxjs';
import { Person } from '../rxjs.models';

@Injectable({
  providedIn: 'root',
})
export class RxjsServiceService {
  private users = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getNumbers() {
    const source$ = interval(1000).pipe(
      map((a) => a + 1),
      take(3)
    );
    return source$;
  }

  getData(): Observable<any> {
    return this.getNumbers().pipe(
      mergeMap((a) => {
        return this.http.get<any>(this.users + '/' + a);
      })
    );
  }

  private dbUrl = 'https://jtest-963e6-default-rtdb.firebaseio.com'; // Replace with your Firebase Realtime Database URL

  // GET request: Fetch data from Firebase
  getRXJSData(): Observable<Person[]> {
    return this.http
      .get<{ [key: string]: { age: number; name: string } }>(
        `${this.dbUrl}/data.json`
      )
      .pipe(
        map((data) =>
          Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }))
        )
      );
  }

  // POST request: Add new data to Firebase
  postData(data: any): Observable<any> {
    return this.http.post(`${this.dbUrl}/data.json`, data);
  }

  // PUT request: Update data at a specific location
  putData(data: any): Observable<any> {
    return this.http.put(`${this.dbUrl}/data/-O4DeabOW6bconPf8K2L.json`, data);
  }

  // DELETE request: Remove data from Firebase
  deleteData(): Observable<any> {
    return this.http.delete(`${this.dbUrl}/data.json`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { interval, map, mergeMap, Observable, take } from 'rxjs';

interface Person {
  id: string;
  age: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class RxjsServiceService {
  private users = 'https://jsonplaceholder.typicode.com/users';
  private comments = 'https://jsonplaceholder.typicode.com/comments';
  private albums = 'https://jsonplaceholder.typicode.com/albums';
  private posts = 'https://jsonplaceholder.typicode.com/posts';

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

  getComments() {}

  getAlbums() {}

  getPosts() {}

  private dbUrl = 'https://jtest-963e6-default-rtdb.firebaseio.com'; // Replace with your Firebase Realtime Database URL

  // GET request: Fetch data from Firebase
  getDataa(): Observable<Person[]> {
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

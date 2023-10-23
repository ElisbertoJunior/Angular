import { Injectable } from '@angular/core';
import { Course } from '../model/Course';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API: string = "http://localhost:8080/api/courses"

  constructor(private http: HttpClient) { }

  list(): Observable<Course[]> {
    return this.http.get<Course[]>(this.API).pipe(
      first(),
      //delay(2000),
      tap(courses => console.log(courses))
    )
  }

  save(record: Course) {
    return this.http.post<Course>(this.API, record).pipe(
      first()
    );
  }

}

import { Injectable } from '@angular/core';
import { Course } from '../model/Course';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, first, tap } from 'rxjs';

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

    if(record.id) {
      return this.update(record);
    }

    return this.create(record);
  }

  private create(record: Course) {
    return this.http.post<Course>(this.API, record).pipe(
      first()
    );

  }

  private update(record: Course) {
    return this.http.put<Course>(`${this.API}/${record.id}`, record).pipe(
      first()
    );
  }

  loadById(id: number) {
    return this.http.get<Course>(`${this.API}/${id}`);
  }

  delete(record: Course) {

    return this.http.delete(`${this.API}/${record.id}`).pipe(
      first(),
      catchError((error: any) => {
        console.error('Erro ao excluir o curso:', error);
        throw error;
      })
    );;
  }

}

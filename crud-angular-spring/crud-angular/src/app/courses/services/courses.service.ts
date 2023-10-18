import { Injectable } from '@angular/core';
import { Course } from '../model/Course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  list(): Course[] {
    return [
      {id: 1, name: 'Angular', category: 'Frontend'},
      {id: 2, name: 'React', category: 'Frontend'},
      {id: 3, name: 'Java', category: 'Backend'}
    ]
  }
}

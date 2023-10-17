import { Component, OnInit } from '@angular/core';
import { Course } from '../model/Course';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[];
  displayedColumns: string[];

  constructor() {
    this.courses = [
      {id: 1, name: 'Angular', category: 'Frontend'},
      {id: 2, name: 'React', category: 'Frontend'},
      {id: 3, name: 'Java', category: 'Backend'}
    ];
    this.displayedColumns = ['name', 'category'];
  }

  ngOnInit(): void {

  }



}

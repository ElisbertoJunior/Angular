import { Component, OnInit } from '@angular/core';
import { Course } from '../model/Course';
import { CoursesService } from '../services/courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[];
  displayedColumns: string[];

  constructor(private courseService: CoursesService) {
    this.courses = courseService.list();
    this.displayedColumns = ['name', 'category'];
  }

  ngOnInit(): void {

  }



}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/Course';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {

  @Input()
  courses: Course[] = [];
  displayedColumns: string[];

  @Output()
  add = new EventEmitter();

  @Output()
  edit = new EventEmitter<Course>();


  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.displayedColumns = ['name', 'category', 'actions'];
  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(course: Course) {
    this.edit.emit(course);
  }

}

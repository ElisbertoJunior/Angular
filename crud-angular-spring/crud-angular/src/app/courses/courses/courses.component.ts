import { Component, OnInit } from '@angular/core';
import { Course } from '../model/Course';
import { CoursesService } from '../services/courses.service';
import { Observable, catchError, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns: string[];


  constructor(private courseService: CoursesService, public dialog: MatDialog) {
    this.courses$ = courseService.list().pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos')
        return of([])
      })
    );

    this.displayedColumns = ['name', 'category'];
  }

  ngOnInit(): void {

  }


  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }


}

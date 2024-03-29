import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CourseFormComponent } from './course-form/course-form.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';

@NgModule({
  declarations: [CoursesComponent, CourseFormComponent, CoursesListComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
})
export class CoursesModule {}

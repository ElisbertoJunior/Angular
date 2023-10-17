import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
        <mat-toolbar color="primary">
          <span>CRUD Angular + Spring</span>
        </mat-toolbar>
        <router-outlet></router-outlet>
    `,
})
export class AppComponent {
  title = 'crud-angular';
}

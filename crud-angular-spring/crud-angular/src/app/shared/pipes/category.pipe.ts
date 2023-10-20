import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch(value) {
      case 'Front-end' : return 'code';
      case 'Back-end' : return 'computer';
    }

    return 'code'
  }

}

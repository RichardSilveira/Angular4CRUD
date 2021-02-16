import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'gender'})
export class GenderPipe implements PipeTransform {


  transform(value: any, ...args): any {
    switch (value) {

      case (1):
        value = 'male';
        break;

      case (2):
        value = 'female';
        break;

    }
    return value;
  }
}

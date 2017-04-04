import { Injectable } from '@angular/core';

import { Person } from './person.model';
import { PERSONS } from './mock-person';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

@Injectable()
export class PersonService {

  constructor() { }

  getPerson(): Observable<Person[]> {
    return new Observable(observer => {
      setTimeout(() => {
      observer.next(PERSONS);
      }, 2000);
    });
  }

  getPersonForId(id: number): Observable<Person[]> {

    if(id <= 0){
      return Observable.throw('The id parameter can not be less than or equal to zero');
    }

    return new Observable(observer => {
      setTimeout(() => {
      observer.next(PERSONS);
      }, 2000);
    }).filter((x: Person) => x.id === id);
  }
}

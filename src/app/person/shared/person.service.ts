import { Injectable } from '@angular/core'

import { Person } from "./person.model";
import { PERSONS } from "./mock-person";
import { Observable } from "rxjs";

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
}

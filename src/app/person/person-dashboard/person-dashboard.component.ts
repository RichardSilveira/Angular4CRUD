import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Person } from "../shared/person.model";
import { PersonService } from "../shared/person.service";

@Component({
  selector: 'app-person-dashboard',
  templateUrl: 'person-dashboard.component.html',
  styleUrls: ['person-dashboard.component.css']
})
export class PersonDashboardComponent implements OnInit {

  public persons: Observable<Person[]>;
  public person: Person[];

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
    this.getPerson()
  }

  public getPerson() {
    this.persons = this.personService.getPerson();   

  }

}

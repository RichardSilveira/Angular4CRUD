import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonDashboardComponent} from './person-dashboard/person-dashboard.component';
import {PersonDetailsComponent} from './person-details/person-details.component';
import {PersonEditComponent} from './person-edit/person-edit.component';
import {PersonRoutingModule} from "./person-routing.module";

@NgModule({
  imports: [
    CommonModule,
    PersonRoutingModule
  ],
  declarations: [PersonDashboardComponent, PersonDetailsComponent, PersonEditComponent]
})
export class PersonModule {
}

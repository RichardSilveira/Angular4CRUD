import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PersonDashboardComponent} from './person-dashboard/person-dashboard.component';
import {PersonDetailsComponent} from './person-details/person-details.component';
import {PersonEditComponent} from './person-edit/person-edit.component';
import {PersonRoutingModule} from './person-routing.module';
import {PersonService} from './shared/person.service';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {MessagesModule} from 'primeng/primeng';
import {GenderPipe} from './shared/gender.pipe';

@NgModule({
  imports: [
    CommonModule,
    PersonRoutingModule,
    DataTableModule,
    MessagesModule
  ],
  declarations: [PersonDashboardComponent, PersonDetailsComponent, PersonEditComponent, GenderPipe],
  providers: [PersonService]
})
export class PersonModule {
}

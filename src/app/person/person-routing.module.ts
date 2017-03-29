import {NgModule} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import {PersonDashboardComponent} from './person-dashboard/person-dashboard.component';
import {PersonDetailsComponent} from './person-details/person-details.component';
import {PersonEditComponent} from './person-edit/person-edit.component';

const routes: Routes = [
  {
    path: '',
    component: PersonDashboardComponent
  },
  {
    path: 'new',
    component: PersonDetailsComponent
  },
  {
    path: ':id/edit',
    component: PersonEditComponent
  },
  {
    path: ':id/view',
    component: PersonDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule {
}

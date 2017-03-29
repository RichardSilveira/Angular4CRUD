import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PersonEditComponent} from './person/person-edit/person-edit.component';
import {PersonDashboardComponent} from './person/person-dashboard/person-dashboard.component';
import {PersonDetailsComponent} from './person/person-details/person-details.component';
import {Routes, PreloadAllModules, RouterModule} from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'person',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'person',
        loadChildren: 'app/person/person.module#PersonModule'
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

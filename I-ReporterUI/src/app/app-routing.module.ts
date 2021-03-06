import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddInterventionRecordComponent} from './components/add-intervention-record/add-intervention-record.component';
import {InterventionRecordListComponent } from './components/intervention-record-list/intervention-record-list.component'
import {InterventionRecordDetailsComponent }from './components/intervention-record-details/intervention-record-details.component'
import {SearchListComponent} from './components/search-list/search-list.component'
import {NavComponent} from '../app/nav/nav.component'
import { ProfileComponent } from './components/profile/profile.component';
import { CurrentprofileComponent} from './components/currentprofile/currentprofile.component';

const routes: Routes = [
  {path:'add/new-intervention-record',component:AddInterventionRecordComponent},
  {path:'intervention-record/all',component:InterventionRecordListComponent},
  {path:'intervention-record/:id',component:InterventionRecordDetailsComponent},

  {path: "profile/:id", component: CurrentprofileComponent},
  {path: "create/profile", component:ProfileComponent}, 
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo:"/", pathMatch:"full"},
  {path:'search-list/:title',component:SearchListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

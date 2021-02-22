import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from 'src/app/Component/login/login.component';
import {UserComponent} from 'src/app/Component/user/user.component';
import {ManagerComponent} from 'src/app/Component/manager/manager.component';
import { TableComponent } from './Component/table/table.component';

const routes: Routes = [{
  // set these up so it can move from page to page for the manager or user pages.
   component: LoginComponent,
   path: ''
}, {
   component: UserComponent,
   path: 'user'
}, {
   component: ManagerComponent,
   path: 'manager'
},
{
    component: TableComponent,
    path: 'table'
 },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }

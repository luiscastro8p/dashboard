
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UserNotificationEditComponent } from './user-notification-edit.component';



const routes: Routes = [
  { path: '', component: UserNotificationEditComponent },
];

@NgModule({
  declarations: [UserNotificationEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    RouterModule.forChild(routes)
  ]
})
export class UserNotificationEditModule { }
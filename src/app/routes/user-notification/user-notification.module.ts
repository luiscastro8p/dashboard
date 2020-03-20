
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UserNotificationComponent } from './user-notification.component';



const routes: Routes = [
  { path: '', component: UserNotificationComponent },
];

@NgModule({
  declarations: [UserNotificationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    RouterModule.forChild(routes)
  ]
})
export class UserNotificationModule { }
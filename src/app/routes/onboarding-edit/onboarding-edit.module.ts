import { OnboardingEditComponent } from './onboarding-edit.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';




const routes: Routes = [
  { path: '', component: OnboardingEditComponent },
];

@NgModule({
  declarations: [OnboardingEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    RouterModule.forChild(routes)
  ]
})
export class OnboardingEditModule { }
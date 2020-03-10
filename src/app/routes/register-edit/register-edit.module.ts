import { RegisterEditComponent } from './register-edit.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: RegisterEditComponent },
];

@NgModule({
  declarations: [RegisterEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class RegisterEditModule { }

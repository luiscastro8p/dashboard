import { AccountsComponent } from './accounts.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ModalModule} from 'ngx-bootstrap/modal'


const routes: Routes = [
  { path: '', component: AccountsComponent },
];

@NgModule({
  declarations: [AccountsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes)
  ]
})
export class AccountsModule { }
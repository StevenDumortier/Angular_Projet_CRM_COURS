import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { SharedModule } from '../shared/shared.module';
import { FormClientComponent } from './components/form-client/form-client.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageAddClientComponent,
    PageListClientsComponent,
    PageEditClientComponent,
    FormClientComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddvaccineComponent } from './addvaccine/addvaccine.component';
import { PatientsComponent } from './patients/patients.component';

const routes: Routes = [
  {
    path : 'patients',
    component: PatientsComponent
  },
  {
    path : 'addvaccine',
    component : AddvaccineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PatientsComponent, AddvaccineComponent]

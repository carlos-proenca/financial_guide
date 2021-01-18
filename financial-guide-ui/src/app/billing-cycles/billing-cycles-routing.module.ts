import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillingCyclesComponent } from './pages/billing-cycles/billing-cycles.component';

const routes: Routes = [
  { path: "", component: BillingCyclesComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingCyclesRoutingModule { }

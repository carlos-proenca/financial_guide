import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from "@ngxs/store";

import { BillingCyclesRoutingModule } from './billing-cycles-routing.module';
import { BillingCyclesComponent } from './pages/billing-cycles/billing-cycles.component';
import { SharedModule } from '../shared/shared.module';

import { BillingCyclesState } from './state/billing-cycles/billing-cycles.state';
import { BalancesState } from './state/balances/balances.state';
import { OperationState } from './state/operations/operation.state';


@NgModule({
  declarations: [BillingCyclesComponent],
  imports: [
    CommonModule,
    BillingCyclesRoutingModule,
    NgxsModule.forRoot([BalancesState, BillingCyclesState, OperationState]),
    SharedModule,
  ]
})
export class BillingCyclesModule { }

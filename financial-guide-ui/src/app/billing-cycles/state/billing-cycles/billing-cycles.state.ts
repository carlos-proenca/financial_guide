import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { GetBillingCyclesAction } from './billing-cycles.actions';
import { BillingCycle } from './billing-cycles.model';
import { BillingCycleService } from './billing-cycles.service';


export class BillingCyclesStateModel {
  BillingCycles: BillingCycle[];
  isLoading: boolean;
  error: String;
}

const defaults = {
  BillingCycles: [],
  isLoading: false,
  error: ""
};

@State<BillingCyclesStateModel>({
  name: 'BillingCycless',
  defaults
})
@Injectable()
export class BillingCyclesState {

  constructor(private billingCyclesService: BillingCycleService) { }

  @Action(GetBillingCyclesAction)
  getAll({ patchState }: StateContext<BillingCyclesStateModel>) {
    patchState({ isLoading: true });
    this.billingCyclesService.getBillingCycles().subscribe(data  => {
        patchState({
          BillingCycles: data,
          isLoading: false,
        });
      }, error  => {
        alert('Something happened. Please try again.');
        patchState({
          isLoading: false,
          error: error.statusText,
        });
    });
  }
}

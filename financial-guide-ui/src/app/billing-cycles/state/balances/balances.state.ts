import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { GetBalancesAction } from './balances.actions';
import { Balance } from './balances.model';
import { BalancesService } from './balances.service';

export class BalancesStateModel {
  balances: Balance[];
  isLoading: boolean;
  error: String;
}

const defaults = {
  balances: [],
  isLoading: false,
  error: ""
};

@State<BalancesStateModel>({
  name: 'balances',
  defaults
})
@Injectable()
export class BalancesState {

  constructor(private balanceService: BalancesService) { }

  @Action(GetBalancesAction)
  getAll({ patchState }: StateContext<BalancesStateModel>) {
    patchState({ isLoading: true });
    this.balanceService.getBalances().subscribe(data  => {
        patchState({
          balances: data,
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

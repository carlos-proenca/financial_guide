import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { GetOperationsAction } from './operation.actions';
import { Operation } from './operation.model';
import { OperationsService } from './operation.service';


export class OperationStateModel {
  operations: Map<number, Operation>;
  isLoading: boolean;
  error: String;
}

const defaults = {
  operations: new Map(),
  isLoading: false,
  error: ""
};

@State<OperationStateModel>({
  name: 'Operation',
  defaults
})
@Injectable()
export class OperationState {

  constructor(private OperationService: OperationsService) { }

  @Action(GetOperationsAction)
  getAll({ patchState }: StateContext<OperationStateModel>) {
    patchState({ isLoading: true });
    this.OperationService.getOperations().subscribe(data  => {
        patchState({
          operations: new Map(data.map(obj => [ obj.id, obj ])),
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

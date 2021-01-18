import { isEmptyExpression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetBalancesAction } from '../../state/balances/balances.actions';
import { GetBillingCyclesAction } from '../../state/billing-cycles/billing-cycles.actions';
import { GetOperationsAction } from '../../state/operations/operation.actions';
import { Operation } from '../../state/operations/operation.model';

export interface Transaction {
  item: string;
  cost: number;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './billing-cycles.component.html',
  styleUrls: ['./billing-cycles.component.scss']
})
export class BillingCyclesComponent implements OnInit {

  displayedColumns: string[] = ['paid', 'description'];

  @Select(state => state.Operation.operations) operations$: Observable<Map<number, Operation>>;
  data: Operation[] = [];

  constructor(private _store: Store) { }

  ngOnInit(): void {
    this._store.dispatch( new GetBalancesAction());
    this._store.dispatch( new GetBillingCyclesAction());
    this._store.dispatch( new GetOperationsAction());

    this.operations$.subscribe(operation =>{
     this.data = [...operation.values()];
      console.log("the teste isssss", this.data)
    }

      //operation.forEach((operationContent, key) => this.data.push(operationContent))
    );
  }

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return 10;
    //return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
}

import { Component, OnInit } from '@angular/core';
import { ToogleSideMenuAction } from '../../state/actions/side-menu.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _store: Store) { }

  ngOnInit(): void {
  }

  toogleMenu(){
    this._store.dispatch(new ToogleSideMenuAction());
  }

}

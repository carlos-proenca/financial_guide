import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetMenusAction } from '../../state/actions/side-menu.actions';
import { MenuItem } from '../../state/models/menu-item.model';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Select((state: any)  => state.sideMenu.isMenuOpened) isMenuOpened$: Observable<boolean>;
  @Select((state: any)  => state.sideMenu.menus) menus$: Observable<MenuItem[]>;

  constructor(private _store: Store) { }

  ngOnInit(): void {
    this._store.dispatch(new GetMenusAction());
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MenuItem } from '../../state/models/menu-item.model';
import { SideMenuState } from '../../state/side-menu.state';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {

  @Select(SideMenuState.getCurrentMenu) menu$: Observable<MenuItem>;

  constructor() { }

  ngOnInit(): void { }

}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetMenusAction, ToogleSideMenuAction } from './actions/side-menu.actions';
import { MenuItem } from './models/menu-item.model';

export class SideMenuStateModel {
  isMenuOpened: boolean;
  menus: MenuItem[];
}

const INITIAL_STATE: SideMenuStateModel  = {
  isMenuOpened: false,
  menus: []
};

@State<SideMenuStateModel>({
  name: 'sideMenu',
  defaults: INITIAL_STATE
})
@Injectable()
export class SideMenuState {

  @Selector()
  static getCurrentMenu(state: SideMenuStateModel): MenuItem | undefined{
    return state.menus.find(m => m.route == 'dashboard');
  }

  @Action(ToogleSideMenuAction)
  toogleMenu({ getState, setState }: StateContext<SideMenuStateModel>) {
    setState({...getState(),  isMenuOpened: (!getState().isMenuOpened)});
  }

  //TODO Mover para receber esta informação via Auth Token
  @Action(GetMenusAction)
  getAllMenus({ getState, setState }: StateContext<SideMenuStateModel>) {
    const menuList = [
      new MenuItem('Balanço Anual', 'balancos', 'Balanço Anual', 'dashboard'),
      new MenuItem('Cadastro de Categorias', 'categorias', 'Cadastro de Categorias', 'assignment_turned_in'),
    ];
    setState({...getState(),  menus: menuList});
  }
}

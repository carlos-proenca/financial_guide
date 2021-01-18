import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';

import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { AngularMaterialModules } from './angular-material';
import { SideMenuState } from './state/side-menu.state';
import { PageTitleComponent } from './components/page-title/page-title.component';

@NgModule({
  declarations: [HeaderComponent, SideMenuComponent, PageTitleComponent],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModules,
    NgxsModule.forRoot([SideMenuState], { developmentMode: true })
  ],
  exports:[
    AngularMaterialModules,
    HeaderComponent,
    SideMenuComponent,
    PageTitleComponent,
  ]
})
export class SharedModule { }

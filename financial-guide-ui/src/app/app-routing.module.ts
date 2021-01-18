import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "balancos", loadChildren: () => import('src/app/billing-cycles/billing-cycles.module').then(m => m.BillingCyclesModule) },
  { path: "categorias", loadChildren: () => import('src/app/categories/categories.module').then(m => m.CategoriesModule) },
  { path: "**", redirectTo: "/balancos"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

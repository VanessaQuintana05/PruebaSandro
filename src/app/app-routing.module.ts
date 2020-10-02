import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Formulario1Component } from './componentegeneral/formulario1/formulario1.component';

const routes: Routes = [
  {path: "Formulario", component:Formulario1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

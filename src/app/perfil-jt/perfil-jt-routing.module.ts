import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilJtPage } from './perfil-jt.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilJtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilJtPageRoutingModule {}

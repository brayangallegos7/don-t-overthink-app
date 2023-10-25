import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilBgPage } from './perfil-bg.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilBgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilBgPageRoutingModule {}

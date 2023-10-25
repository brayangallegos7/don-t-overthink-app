import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilJdPage } from './perfil-jd.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilJdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilJdPageRoutingModule {}

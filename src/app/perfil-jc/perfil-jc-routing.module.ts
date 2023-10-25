import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilJcPage } from './perfil-jc.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilJcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilJcPageRoutingModule {}

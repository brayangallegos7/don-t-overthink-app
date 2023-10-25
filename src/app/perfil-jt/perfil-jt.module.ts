import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilJtPageRoutingModule } from './perfil-jt-routing.module';

import { PerfilJtPage } from './perfil-jt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilJtPageRoutingModule
  ],
  declarations: [PerfilJtPage]
})
export class PerfilJtPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilBgPageRoutingModule } from './perfil-bg-routing.module';

import { PerfilBgPage } from './perfil-bg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilBgPageRoutingModule
  ],
  declarations: [PerfilBgPage]
})
export class PerfilBgPageModule {}

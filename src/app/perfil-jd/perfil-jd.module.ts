import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilJdPageRoutingModule } from './perfil-jd-routing.module';

import { PerfilJdPage } from './perfil-jd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilJdPageRoutingModule
  ],
  declarations: [PerfilJdPage]
})
export class PerfilJdPageModule {}

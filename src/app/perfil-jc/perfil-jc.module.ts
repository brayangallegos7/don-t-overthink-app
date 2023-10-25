import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilJcPageRoutingModule } from './perfil-jc-routing.module';

import { PerfilJcPage } from './perfil-jc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilJcPageRoutingModule
  ],
  declarations: [PerfilJcPage]
})
export class PerfilJcPageModule {}

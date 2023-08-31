import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarListaPageRoutingModule } from './criar-lista-routing.module';

import { CriarListaPage } from './criar-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarListaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CriarListaPage]
})
export class CriarListaPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupagePageRoutingModule } from './signupage-routing.module';

import { SignupagePage } from './signupage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupagePageRoutingModule
  ],
  declarations: [SignupagePage]
})
export class SignupagePageModule {}

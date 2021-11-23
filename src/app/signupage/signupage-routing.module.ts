import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupagePage } from './signupage.page';

const routes: Routes = [
  {
    path: '',
    component: SignupagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupagePageRoutingModule {}

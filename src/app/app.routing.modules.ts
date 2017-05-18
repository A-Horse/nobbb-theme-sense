import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage }   from './home.component';
import { CategorysPage }      from './categorys.component';

const routes: Routes = [
  { path: '',  component:  HomePage},
  { path: 'categorys', component: CategorysPage}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

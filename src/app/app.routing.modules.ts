import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.component';
import { CategorysPage } from './categorys.component';
import { CategoryPage } from './category.component';
import { ArticlePage } from './article.component';

const routes: Routes = [
  { path: '',  component:  HomePage },
  { path: 'categorys', component: CategorysPage },
  { path: 'category/:categoryName', component: CategoryPage },
  { path: 'category/:categoryName/:articleName', component: ArticlePage }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

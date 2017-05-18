import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomePage }   from './home.component';
import { CategorysPage }      from './categorys.component';
import { CategoryPage } from './category.component';

import { AppRoutingModule } from './app.routing.modules';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    CategoryPage,
    CategorysPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

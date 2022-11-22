import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppProductComponent } from './app-product/app-product.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppProductComponent,
    AppToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

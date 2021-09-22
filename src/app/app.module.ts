import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeersComponent } from './components/beers/beers.component';
import { BasketComponent } from './components/basket/basket.component';
import { HttpClientModule } from '@angular/common/http';
import { BeerComponent } from './components/beer/beer.component';

@NgModule({
  declarations: [
    AppComponent,
    BeersComponent,
    BasketComponent,
    BeerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

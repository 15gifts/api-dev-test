import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './components/basket/basket.component';
import { BeersComponent } from './components/beers/beers.component';

const routes: Routes = [
  {
    path: '',
    component: BeersComponent
  },
  {
    path: 'basket',
    component: BasketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
